export default {
  install(Vue, options) {
    var lang = new Lang({
      messages: window.translationSource
    });
    lang.setLocale("default");

    Vue.filter('trans', (...args) => {
      return lang.get(...args);
    });
  }
};
