import React from 'react'
import {View} from 'react-native'
import {useTheme} from '@vela/ui/src/lib/theme'
import TextInput from './TextInput'
import Label from '@vela/ui/src/components/Label'
import Spacer from '@vela/ui/src/components/Spacer'
import Footnote from '@vela/ui/src/components/Footnote'

function TextField({
  field = {},
  placeholder,
  form ={},
  label,
  ...props
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
        {...props}
      />
      <Footnote style={baseErrorStyle}>{error}</Footnote>
      <Spacer size="s" />
    </View>
  )
}

export default TextField
