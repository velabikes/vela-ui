import React from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { View } from 'react-native'

import TextInput from '../TextInput'
import Label from '../Label'
import Spacer from '../Spacer'
import Footnote from '../Footnote'
import { useTheme } from '../../lib/theme'

const PhoneInput = props => (
  <TextInputMask
    type={'cel-phone'}
    options={{
      maskType: 'BRL',
      withDDD: true,
      dddMask: '(99) '
    }}
    customTextInput={TextInput}
    {...props}
  />
)

const PhoneField = ({
  field = {},
  placeholder,
  form = {},
  label,
  ...props
}) => {
  const { colors } = useTheme()
  const { name, value } = field
  const { error, handleChange, handleBlur } = form
  const baseErrorStyle = {
    color: colors.negative,
  }
  return (
    <View>
      <Label>{label || name}</Label>
      <Spacer size="xs" />
      <PhoneInput
        error={error}
        placeholder={placeholder}
        onChangeText={handleChange && handleChange(name)}
        onBlur={handleChange && handleBlur(name)}
        value={value}
        {...props}
      />
      <Footnote style={baseErrorStyle}>{error}</Footnote>
      <Spacer size="s" />
    </View>
  )
}

export default PhoneField
