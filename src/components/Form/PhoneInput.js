import React from 'react'
import TextInput from './TextInput'

const phoneFormat = phone => phone.replace(/([^\d])+/gim, '')
const maskPhone = value => value.replace(/^(\d{2})(\d{4,5})(\d{1,4}).*/,"$1 $2-$3")

const PhoneInput = ({onChangeText, value, ...props }) => {
  return (
    <TextInput
      onChangeText={text => {
        onChangeText(phoneFormat(text))
      }}
      value={maskPhone(value)}
      keyboardType='numeric'
      {...props}
    />
  )
}

export default PhoneInput
