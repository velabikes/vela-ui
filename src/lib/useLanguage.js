import {useTheme} from './theme'

export function useLanguage() {
  const {locale} = useTheme()
  return locale.split('-')[0]
}