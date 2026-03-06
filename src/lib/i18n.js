import es from "../i18n/es.json";
import en from "../i18n/en.json";

export const languages = {
  es,
  en
};

export function useTranslations(lang) {
  return languages[lang] || languages.es;
}