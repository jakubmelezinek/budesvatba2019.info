import { set_lang, SET_LANG } from "~/store/names";


export const state = () => ({
  locales: ['en', 'cs'],
  locale: 'cs'
});

export const mutations = {
  [SET_LANG](state, locale) {
    state.locale = locale;
  }
};

export const actions = {
  [set_lang]({ state, store, commit }, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      (this as any).app.i18n.locale = locale;
      commit(SET_LANG, locale)
    }
  }
};
