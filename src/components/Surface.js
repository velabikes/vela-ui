import React from 'react'
import {View} from 'react-native'
import {useTheme} from '../lib/theme'

export default function Surface({children, style, ...props}) {
  const {colors} = useTheme()
  
  return <View style={[style, {backgroundColor: 'transparent'}]} {...props}>{children}</View>
}