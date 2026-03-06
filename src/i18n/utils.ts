import { ui } from "./ui";
import { defaultLang } from "./config";

export function useTranslations(lang: keyof typeof ui) {

  return function t(key: string) {

    const keys = key.split(".");
    let value: any = ui[lang] ?? ui[defaultLang] ?? {};

    for (const k of keys) {

      if (!value || !(k in value)) {
        console.warn(`Missing translation: ${key} (${lang})`);
        return key;
      }

      value = value[k];
    }

    return value;
  };
}