import {createContext, useContext} from 'react'

export const ThemeContext = createContext('light')

export function useTheme() {
  const themeValue = useContext(ThemeContext)
  return themes[themeValue]
}

const margin = {
  xsmall: '1px',
  small: '2px',
  medium: '4px',
  large: '12px',
  xlarge: '24px'
}

const metrics = {
  padding: 24,
  text: 14
}

const themes = {
  light: {
    colors: {
      background: '#EFEFEF',
      foreground: '#FFFEFE',
      title: '#4B4A4A',
      text: '#2D2D2D',
      footnote: '#7B7B7B',
      placeholder: '#7B7B7B',
      link: '#21C2E0',
      input: '#FFFEFE',
      border: '#D6D4D4',
      brand: '#3D9771',
      primary: '#43CD8B',
      secondary: '#4FD4F0',
      negative: '#E52B1F',
      disabled: '#D6D4D4',
      cta: "#FF6574"
    },
    metrics,
    margin
  },
  dark: {
    colors: {
      background: '#2D2D2D',
      foreground: '#4B4A4A',
      title: '#EFEFEF',
      text: '#FFFEFE',
      footnote: '#C3BEBE',
      placeholder: '#D6D4D4',
      link: '#78DEF5',
      input: '#2D2D2D',
      border: '#D6D4D4',
      brand: '#3D9771',
      primary: '#43CD8B',
      secondary: '#4FD4F0',
      negative: '#FA4242',
      disabled: '#4B4A4A',
      cta: '#FB9199'
    },
    metrics,
    margin
  }
}
