import {createContext, useContext} from 'react'

export const ThemeContext = createContext(null)

export function useTheme() {
  const themeValue = useContext(ThemeContext)
  return themes[themeValue] || themes.light
}

const themes = {
  light: {
    colors: {
      background: '#f1f1f1',
      foreground: '#f9f9f9',
      navbar: '#f1f1f1',
      nav: '#478f7b',
      title: '#191919',
      text: '#191919',
      footnote: '#666666',
      placeholder: '#A4A4A4',
      link: '#3793d9',
      input: '#FFFFFF90',
      border: '#C1C1C1',
      brand: '#417E6B',
      primary: '#478f7b',
      secondary: '#e87d77',
      negative: '#BB444E',
      disabled: '#C1C1C1'
    }
  },
  dark: {
    colors: {
      background: '#1D1D1D',
      foreground: '#333333',
      navbar: '#393939',
      nav: '#6ebba9',
      title: '#6ebba9',
      text: '#f9f9f9',
      footnote: '#A4A4A4',
      placeholder: '#666666',
      link: '#bcddf3',
      input: '#333333',
      border: '#666666',
      brand: '#417E6B',
      primary: '#6cbca9',
      secondary: '#f1A09D',
      negative: '#E14A42',
      disabled: '#444444'
    }
  }
}