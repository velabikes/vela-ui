import React from 'react'
import {View} from 'react-native'
import {useTheme} from '../lib/theme'
import TextInput from './TextInput'
import Label from './Label'
import Spacer from './Spacer'
import Footnote from './Footnote'

function TextField({
  field = {},
  placeholder,
  form ={},
  label
}) {
  const {colors} = useTheme()
  const {name, value} = field
  const {error, handleChange, handleBlur} = form
  const baseErrorStyle = {
    color: colors.negative,
  }
  return (
    <View>
      <Label>{label || name}</Label>
      <Spacer size="xs" />
      <TextInput
        error={error}
        placeholder={placeholder}
        onChangeText={handleChange && handleChange(name)}
        onBlur={handleChange && handleBlur(name)}
        value={value}
      />
      <Footnote style={baseErrorStyle}>{error}</Footnote>
      <Spacer size="s" />
    </View>
  )
}

export default TextField
