import React from 'react'
import {Text} from 'react-native'
import { useTheme } from '../lib/theme'

export default function Anchor({children, onPress, style}) {
  const {colors} = useTheme()
  const TextStyle = {
    color: colors.anchor,
    fontWeight: 'bold'
  }

  return (
    <Text onPress={onPress} style={[TextStyle, style]}>
      {children}
    </Text>
  )
}