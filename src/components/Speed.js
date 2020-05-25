import React from 'react'
import Text from './Text'
import convert from 'convert-units'
import {useTheme} from '../lib/theme'

function Speed({
  speed,
  valueComponent,
  unitComponent,
  ...props
}) {
  const Value = valueComponent || Text
  const Unit = unitComponent || Text
  const {locale} = useTheme()
  const country = locale.slice(3)
  const system = country === 'US' ? 'imperial' : 'metric'
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
