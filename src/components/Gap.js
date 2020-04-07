import React from 'react'
import Box from './Box'
import { useTheme } from '../lib/theme'

export default function Gap({size, style}) {
  const {margin} = useTheme()
  const baseStyle = {
    minHeight: margin[size] || margin['medium'],
    minWidth: margin[size] || margin['medium']
  }
  return <Box style={[baseStyle, style]} />
}
