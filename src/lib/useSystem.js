import {useTheme} from './theme'

export function useSystem() {
  const {locale} = useTheme()
  const country = locale.slice(3)
  return country === 'US' ? 'imperial' : 'metric'
}