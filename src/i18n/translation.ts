import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { en } from './languages/en'
import { ja } from './languages/ja'

export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = en

const map: { [key: string]: Translation } = {
  es: en,
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: en,
  zh_tw: en,
  ja: ja,
  ja_jp: ja,
  ko: en,
  ko_kr: en,
}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'en'
  return getTranslation(lang)[key]
}
