import React from 'react'
import PhoneInput from './PhoneInput'
import FieldBase from './FieldBase'

const validatePhone = value => {
  if (value.length < 14) return 'Telefone incompleto.'
}

export default PhoneField = props =>
  <FieldBase {...props} input={PhoneInput} validate={validatePhone} />
