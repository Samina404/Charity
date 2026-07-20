const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  bn: () => import('@/dictionaries/bn.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ['en', 'bn', 'ar'];
export const defaultLocale: Locale = 'en';

export const hasLocale = (locale: string): locale is Locale => {
  return locale in dictionaries;
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries[defaultLocale]();
};
