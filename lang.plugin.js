export default {
  install(Vue, options) {
    var lang = new Lang({
      messages: window.translationSource
    });
    lang.setLocale("default");

    // option (1)
    Vue.filter("trans", (...args) => {
      return lang.get(...args);
    });

    // option (2)
    Vue.mixin({
      methods: {
        lang(...args) {
          return lang.get(...args);
        }
      }
    });
  }
};
