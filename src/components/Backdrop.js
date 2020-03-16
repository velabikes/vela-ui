import React from 'react'
import {View} from 'react-native'
import {useTheme} from '../lib/theme'

export default function Backdrop({children, style, ...props}) {
  const {colors} = useTheme()
  const baseStyle = {
    backgroundColor: colors.background
  }
  return <View style={[baseStyle, style]} {...props}>{children}</View>
}