import React from 'react'
import Text from './Text'
import convert from 'convert-units'
import {useSystem} from '../lib/useSystem'

function Distance({
  meters,
  valueComponent,
  unitComponent,
  ...props
}) {
  const Value = valueComponent || Text
  const Unit = unitComponent || Text
  const system = useSystem()
  const displayUnit = system === 'metric'
    ? meters > 999 ? 'km' : 'm'
    : meters > 1600 ? 'mi' : 'yd'

  const value = convert(meters).from('m').to(displayUnit)

  return (
    <>
      <Value {...props}>{value.toFixed(1)}</Value>
      <Unit {...props}>{displayUnit}</Unit>
    </>
  )
}

export default Distance
