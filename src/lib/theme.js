import {createContext, useContext} from 'react'
import {useWindowDimensions} from 'react-native'
export const ThemeContext = createContext('light')

const SPACING_MAP = {
  small: 16,
  medium: 24,
  large:  24
}

const FONTSIZE_MAP = {
  small: 16,
  medium: 16,
  large: 16
}

const BREAKPOINT_MAP = {
  small: 480,
  medium: 1024,
  large: 1366
}

const PALLETE = {
  coral: '#123123',
  charcoral: '#123123',
  midnight: '#123123'
}

const COLOR_MAP = {
  light: {
    background: '#EFEFEF',
    foreground: '#FFFEFE',
    title: '#4B4A4A',
    text: '#2D2D2D',
    footnote: '#7B7B7B',
    placeholder: '#7B7B7B',
    anchor: '#21C2E0',
    input: '#FFFEFE',
    border: '#D6D4D4',
    brand: '#3D9771',
    primary: '#43CD8B',
    secondary: '#4FD4F0',
    negative: '#E52B1F',
    disabled: '#D6D4D4',
    cta: "#FF6574"
  },
  dark: {
    background: '#2D2D2D',
    foreground: '#4B4A4A',
    title: '#EFEFEF',
    text: '#FFFEFE',
    footnote: '#C3BEBE',
    placeholder: '#D6D4D4',
    anchor: '#78DEF5',
    input: '#2D2D2D',
    border: '#D6D4D4',
    brand: '#3D9771',
    primary: '#43CD8B',
    secondary: '#4FD4F0',
    negative: '#FA4242',
    disabled: '#4B4A4A',
    cta: '#FB9199'
  }
}

const theme = ({ variant, breakpoint }) => {
  const baseSpacing = SPACING_MAP[breakpoint]
  const baseFontSize = FONTSIZE_MAP[breakpoint]

  const margin = {
    xsmall: baseSpacing / 8,
    small: baseSpacing / 4,
    medium: baseSpacing / 2,
    large: baseSpacing,
    xlarge: baseSpacing * 2
  }

  const colors = COLOR_MAP[variant]

  return {
    baseSpacing,
    baseFontSize,
    margin,
    colors
  }
}

const widhtToBreakpoint = width => {
  if (width < BREAKPOINT_MAP['small']) return 'small'
  if (width < BREAKPOINT_MAP['medium']) return 'medium'
  return 'large'
}

export function useTheme() {
  const variant = useContext(ThemeContext) || "light"
  const {width} = useWindowDimensions()
  const breakpoint = widhtToBreakpoint(width)

  return theme({variant, breakpoint})
}