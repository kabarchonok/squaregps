module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/_variables.scss";'
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE || 'ru',
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
