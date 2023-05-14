import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translations: {
          welcome: "Chat AI from Nerijus",
          instruction: "Type a message here and hit Enter...",
        },
      },
      de: {
        translations: {
          welcome: "Chat-KI von Nerijus",
          instruction:
            "Geben Sie hier eine Nachricht ein und drücken Sie Enter...",
        },
      },
      ru: {
        translations: {
          welcome: "Чат ИИ от Nerijus",
          instruction: "Введите здесь сообщение и нажмите Enter...",
        },
      },
      lt: {
        translations: {
          welcome: "Chat DI nuo Nerijaus",
          instruction: "Įveskite pranešimą čia ir paspauskite Enter...",
        },
      },
    },
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    fallbackLng: "en", // use en if detected lng is not available

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
