import React from 'react'
import TextInput from './TextInput'

import StringMask from 'string-mask'

//import { TextInputMask } from 'react-native-masked-text'

const phoneFormat = phone => {
  const newPhone = phone.replace(/([^\d])+/gim, '')
  return newPhone
}

const maskPhone = value => {
  const formatter = new StringMask('(00) 00000-0000')
  const result = formatter.apply(value)
  return result
}

const PhoneInput = ({onChangeText, value, ...props }) => {

  console.log(props)
  return (
    <TextInput
      onChangeText={text => {
        phoneFormat(text)
      }}
      value={maskPhone(value)}
      keyboardType='numeric'
      {...props}
    />
  )
}

export default PhoneInput
