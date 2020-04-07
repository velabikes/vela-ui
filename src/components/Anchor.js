import React from 'react'
import Text from './Text'
import { useTheme } from '../lib/theme'

export default function Anchor({label, onPress, style, ...props}) {
  const {colors} = useTheme()
  const TextStyle = {
    color: colors.anchor,
    fontWeight: 'bold'
  }

  return (
    <Text onPress={onPress} style={[TextStyle, style]} {...props}>
      {label}
    </Text>
  )
}