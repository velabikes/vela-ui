import React from 'react'
import {View} from 'react-native'

const sizeDict = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 48
}

function Spacer({children, style, size}) {
  const textStyle = {
    minHeight: sizeDict[size || 'm'],
    minWidth: sizeDict[size || 'm']
  }
  return <View style={[textStyle, style]} />
}

export default Spacer
