import React from 'react'
import {TextInput as BaseTextInput} from 'react-native'
import {useTheme} from '../../lib/theme'

function TextInput({style, error, ...props}) {
  const {colors} = useTheme()
  const baseStyle = {
    padding: 12,
    borderColor: error ? colors.negative : colors.border,
    borderWidth: 1,
    borderRadius: 14,
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: colors.input,
    color: colors.text
  }
  const textStyle = {
    color: colors.text
  }
  return (
    <BaseTextInput
      style={[baseStyle, style]}
      placeholderTextColor={colors.placeholder}
      {...props}
    />
  )
}

export default TextInput
