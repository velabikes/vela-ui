import React from 'react'
import {View} from 'react-native'
import {useTheme} from '../lib/theme'

const Box = ({children, style, ...props}) => {
  const {colors, metrics} = useTheme()
  const baseStyle = {
    backgroundColor: colors.background,
    padding: metrics.padding
  }
  return <View style={[baseStyle, style]} {...props}>{children}</View>
}

export default Box
