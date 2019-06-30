import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { Action, State } from "~/node_modules/vuex-class";
import { set_lang } from "~/store/names";

@Component
export default class Header extends Vue {
  @Action(set_lang) setLang;
  @State locale;

  get otherLang() {
    console.log("locale:", this.locale);
    return this.locale == 'en' ? 'cs': 'en';
  }
}
