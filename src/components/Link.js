import React from 'react'
import {Text} from 'react-native'

function Link({children, onPress, style}) {
  const TextStyle = {
    color: '#4F7EA8',
    fontWeight: 'bold'
  }

  return (
    <Text onPress={onPress} style={[TextStyle, style]}>
      {children}
    </Text>
  )
}

export default Link
