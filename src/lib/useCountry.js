import {useTheme} from './theme'

export function useCountry() {
  const {locale} = useTheme()
  return locale.slice(3)
}