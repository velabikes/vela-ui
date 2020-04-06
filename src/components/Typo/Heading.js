import React from 'react'
import Text from '../Text'

const sizeStyle = {
  xs: {fontSize: 20, letterSpacing: 0.4},
  s: {fontSize: 24, letterSpacing: 0.2},
  m: {fontSize: 32},
  l: {fontSize: 48, fontWeight: '500'},
  xl: {fontSize: 60, fontWeight: '500'}
}

function Heading({children, style, size}) {
  const baseStyle = {
    fontWeight: 'bold',
    fontFamily: 'Barlow'
  }
  return (
    <Text style={[baseStyle, sizeStyle[size || 'm'], style]}>{children}</Text>
  )
}

export default Heading
