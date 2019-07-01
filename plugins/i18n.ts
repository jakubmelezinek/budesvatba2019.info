import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

/**
 * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
 * @param choicesLength {number} an overall amount of available choices
 * @returns a final choice index to select plural word by
 **/
const getChoiceIndexOrig = VueI18n.prototype.getChoiceIndex;
VueI18n.prototype.getChoiceIndex = function(choice, choicesLength) {
  // this === VueI18n instance, so the locale property also exists here
  if (this.locale === 'cs') {

    const isOne = choice === 1;
    const isTwoThreeFour = choice === 2 || choice === 3 || choice === 4;

    if (isOne) {
      return 0;
    }

    if (isTwoThreeFour) {
      return 1;
    }

    return 2;
  }

  return getChoiceIndexOrig.call(this, ...arguments);
};

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'cs',
    messages: {
      'en': require('~/locales/en.i18n.json'),
      'cs': require('~/locales/cs.i18n.json')
    }
  });
}
