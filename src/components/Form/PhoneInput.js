import React from 'react'
import TextInput from './TextInput'
import { useCountry } from '../../lib/useCountry'


const phoneFormat = phone => phone.replace(/([^\d])+/gim, '')
const maskByCountry = {
  'BR': value => value?.replace(/^(\d{2})(\d{4,5})(\d{1,4}).*/,"$1 $2-$3"),
  'US': value => value?.replace(/^(\d{3})(\d{1,3})(\d{1,4}).*/,"$1 $2-$3")
}
const maskPhone = (value, country) => maskByCountry[country](value)

const PhoneInput = ({onChangeText, value, country, ...props }) => {
  const localeCountry = useCountry()
  const maskedPhone = maskPhone(value, country || localeCountry)

  return (
    <TextInput
      onChangeText={text => {
        onChangeText(phoneFormat(text))
      }}
      value={maskedPhone}
      keyboardType='numeric'
      {...props}
    />
  )
}

export default PhoneInput
