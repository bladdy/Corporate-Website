import { defineMiddleware } from "astro:middleware";
import { languages, defaultLang } from "./i18n/config";

export const onRequest = defineMiddleware((context, next) => {

  const { pathname } = context.url;

  const segments = pathname.split("/");
  const lang = segments[1];

  if (!languages[lang as keyof typeof languages]) {

    return context.redirect(`/${defaultLang}${pathname}`);

  }

  return next();

});