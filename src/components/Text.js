import React from 'react'
import {Text as RNText} from 'react-native'
import {useTheme} from '../lib/theme'


const Text = ({children, style, size, weight, textAlign, ...props}) => {
  const {colors, typo: {text}} = useTheme()

  const baseStyle = {
    fontWeight: '500',
    color: colors.text,
    fontFamily: 'Barlow',
    textAlign: textAlign || 'left',
    fontSize: text.size[size] || size || text.size.medium,
    fontWeight: weight || '500'
  }
  return (
    <RNText style={[baseStyle, style]} {...props}>
      {children}
    </RNText>
  )
}

export default Text
