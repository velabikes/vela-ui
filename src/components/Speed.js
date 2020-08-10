import React, {useState, useEffect} from 'react'
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

  const [instantSpeed, setInstantSpeed] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (instantSpeed > speed) setInstantSpeed(instantSpeed - 1)
      if (instantSpeed < speed) setInstantSpeed(instantSpeed + 1)
    }, 100)
    return () => clearInterval(interval)
  })

  const value = convert(instantSpeed).from('km/h').to(unit)

  return (
    <>
      <Value {...props}>{value.toFixed(0)}</Value>
      <Unit {...props}>{displayUnit}</Unit>
    </>
  )
}

export default Speed
