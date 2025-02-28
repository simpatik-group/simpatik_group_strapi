import { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    tutorials: false,
    notifications: { releases: false },
    translations: {
      en: {
        "Auth.form.welcome.title": "Simpatik Group",
        "Auth.form.welcome.subtitle": "Log in",
        "Settings.profile.form.section.experience.interfaceLanguageHelp": "Preference changes will apply only to you",
      },
      uk: {
        "Auth.form.welcome.subtitle": "Вхід",
        "Auth.form.rememberMe.label": "Запамятати мене",
        "HomePage.header.title": "Вітаємо {name}",
        "HomePage.header.subtitle": "Ласкаво просимо до панелі адміністрування",
        "global.save": "Зберегти",
        "global.select": "Оберіть",
        "global.password": "Пароль",
        "global.finish": "Завершити",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    document.title = "Simpatik Group Admin";
    // console.log(app);
    const observer = new MutationObserver(() => {
      if (document.title !== "Simpatik Group Admin") {
        document.title = "Simpatik Group Admin";
      }
    });

    observer.observe(document.querySelector("title"), {
      childList: true,
      subtree: true,
    });
  },
};
