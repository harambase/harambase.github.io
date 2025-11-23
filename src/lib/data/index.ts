import * as en from './en';
import * as zh from './zh';

const data = {
  en,
  zh,
};

export type Locale = keyof typeof data;

export const getData = (locale: string) => {
  return data[locale as Locale] || data['en'];
}
