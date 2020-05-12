import React from 'react'
import {Text as RNText} from 'react-native'
import {useTheme} from '../lib/theme'
import {colorIsDark} from '../lib/colors'

const Text = ({children, style, color, size, weight, textAlign, background, ...props}) => {
  const {colors, typo: {text}} = useTheme()
  const backgroundValue = colors[background] || background
  const textTheme = useTheme(colorIsDark(backgroundValue) ? 'dark' : 'light')
  const textColors = backgroundValue ? textTheme.colors : colors

  const baseStyle = {
    fontWeight: '500',
    color: textColors[color] || color || textColors.text,
    fontFamily: 'Barlow',
    textAlign: textAlign || 'left',
    fontSize: text.size[size] || size || text.size.medium,
    fontWeight: weight || '400'
  }

  return (
    <RNText style={[baseStyle, style]} {...props}>
      {children}
    </RNText>
  )
}

export default Text
