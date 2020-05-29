import React from 'react'
import SelectInput from './SelectInput'
import FieldBase from './FieldBase'

const SelectField = props =>
  <FieldBase {...props} input={SelectInput} />

export default SelectField
