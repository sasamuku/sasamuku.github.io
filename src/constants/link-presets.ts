import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive/',
  },
  [LinkPreset.Resume]: {
    name: i18n(I18nKey.resume),
    url: '/resume/',
  },
  [LinkPreset.Behavior]: {
    name: i18n(I18nKey.behavior),
    url: '/behavior/',
  },
  [LinkPreset.Instructions]: {
    name: i18n(I18nKey.instructions),
    url: '/instructions/',
  },
}
