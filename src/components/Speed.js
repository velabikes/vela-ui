import React from 'react'
import Text from './Text'
import convert from 'convert-units'
import {useSystem} from '../lib/useSystem'

function Speed({
  speed,
  valueComponent,
  unitComponent,
  ...props
}) {
  const Value = valueComponent || Text
  const Unit = unitComponent || Text
  const system = useSystem()
  const unit = system === 'metric' ? 'km/h' : 'm/h'
  const displayUnit = unit === 'm/h' ? 'mi/h' : unit

  const value = convert(speed).from('km/h').to(unit)

  return (
    <>
      <Value {...props}>{value.toFixed(1)}</Value>
      <Unit {...props}>{displayUnit}</Unit>
    </>
  )
}

export default Speed
