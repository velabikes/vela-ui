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
    cta: "#FF6574",
    charge: '#EF2248',
    alert: '#E52B1F',
    warning: '#FFAF2D'
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
    cta: '#FF6574',
    charge: '#FB9199',
    alert: '#FC837B',
    warning: '#FFD859'
  }
}

const theme = ({ variant, breakpoint }) => {
  const baseSpacing = SPACING_MAP[breakpoint]
  const baseFontSize = FONTSIZE_MAP[breakpoint]

  const layout = {
    xsmall: baseSpacing * 5,
    small: baseSpacing * 8,
    medium: baseSpacing * 16,
    large: baseSpacing * 32,
    xlarge: baseSpacing * 48
  }

  const margin = {
    xsmall: baseSpacing / 8,
    small: baseSpacing / 4,
    medium: baseSpacing / 2,
    large: baseSpacing,
    xlarge: baseSpacing * 2
  }

  const colors = COLOR_MAP[variant]

  const text = {
    size: {
      xsmall: baseFontSize * 0.6875,
      small: baseFontSize * 0.875,
      medium: baseFontSize,
      large: baseFontSize * 1.125,
      xlarge: baseFontSize * 1.5,
      xxlarge: baseFontSize * 2
    }
  }

  const heading = {
    size: {
      small: text.size.large,
      medium: text.size.xlarge,
      large: text.size.xxlarge,
    }
  }

  const subheading = {
    size: {
      small: text.size.medium,
      medium: text.size.large,
      large: text.size.xlarge,
    }
  }

  return {
    baseSpacing,
    baseFontSize,
    margin,
    layout,
    colors,
    typo: {
      text,
      heading,
      subheading
    }
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