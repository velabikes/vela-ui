import {useCountry} from './useCountry'

export function useSystem() {
  const country = useCountry()
  return country === 'US' ? 'imperial' : 'metric'
}