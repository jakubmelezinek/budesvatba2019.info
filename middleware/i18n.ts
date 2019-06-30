export default function({ isHMR, app, store, query, params, error, }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return;
  // Get locale from params
  const locale = query.lang || params.lang || app.i18n.fallbackLocale;
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('SET_LANG', locale);
  app.i18n.locale = store.state.locale;
}
