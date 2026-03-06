import { defineMiddleware } from "astro:middleware";
import { languages, defaultLang } from "./i18n/config";

export const onRequest = defineMiddleware((context, next) => {
  const lang = context.url.pathname.split("/")[1];

  if (!languages[lang as keyof typeof languages]) {
    return context.redirect(`/${defaultLang}/${context.url.pathname}`);
  }

  return next();
});