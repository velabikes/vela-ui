import React from 'react'
import {View} from 'react-native'
import Text from '../Text'

const Paragraph = ({children, size}) => {
  const baseStyle = {
    marginBottom: 16
  }
  return (
    <View style={baseStyle}>
      <Text size={size}>{children}</Text>
    </View>
  )
}

export default Paragraph
