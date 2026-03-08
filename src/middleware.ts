import { languages, defaultLang } from "./i18n/config";

export function onRequest(context: any,  next: any) {

  const { pathname } = context.url;

  const segments = pathname.split("/");
  const lang = segments[1];

  if (!languages[lang as keyof typeof languages]) {

    if (pathname === "/") {
      return context.redirect(`/${defaultLang}/`);
    }

    return context.redirect(`/${defaultLang}${pathname}`);
  }

  return next();
}