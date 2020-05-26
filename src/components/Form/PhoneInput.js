import React from 'react'
import TextInput from './TextInput'
import { useTheme } from '../../lib/theme'


const phoneFormat = phone => phone.replace(/([^\d])+/gim, '')
const maskByLocale = {
  'pt-BR': value => value.replace(/^(\d{2})(\d{4,5})(\d{1,4}).*/,"$1 $2-$3"),
  'en-US': value => value.replace(/^(\d{3})(\d{1,3})(\d{1,4}).*/,"$1 $2-$3")
}
const maskPhone = (value, locale) => maskByLocale[locale](value)

const PhoneInput = ({onChangeText, value, ...props }) => {
  const { locale } = useTheme()
  const maskedPhone = maskPhone(value, locale)
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
