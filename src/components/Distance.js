import React from 'react'
import Text from './Text'
import convert from 'convert-units'

function Distance({
  meters,
  system,
  ...props
}) {
  const displayUnit = system === 'metric'
    ? meters > 999 ? 'km' : 'm'
    : meters > 1600 ? 'mi' : 'yd'

  const value = convert(meters).from('m').to(displayUnit)

  return (
    <>
      <Text {...props}>{value}</Text>
      <Text {...props}>{displayUnit}</Text>
    </>
  )
}

export default Distance
