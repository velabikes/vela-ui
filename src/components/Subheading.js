import React from 'react'
import Text from './Text'

const sizeStyles = {
  s: {
    fontSize: 16,
    fontWeight: '500'
  },
  m: {
    fontSize: 20,
    fontWeight: '500'
  },
  l: {
    fontSize: 24
  }
}

function Subheading({children, style, size}) {
  const sizeStyle = sizeStyles[size || 'm']
  const baseStyle = {
    fontWeight: '400',
    lineHeight: sizeStyle.fontSize * 1.2,
    fontFamily: 'Barlow'
  }

  return <Text style={[baseStyle, sizeStyle, style]}>{children}</Text>
}

export default Subheading
