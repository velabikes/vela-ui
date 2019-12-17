import React from 'react'
import {Text} from 'react-native'

function Distance({meters}) {
  const unit = meters > 999 ? 'km' : 'm'
  const value = unit === 'km' ? (meters / 1000).toFixed(1) : meters

  return (
    <Text>
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </Text>
  )
}

export default Distance
