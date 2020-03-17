import React, {useState} from 'react'
import {TextInput as BaseTextInput} from 'react-native'
import {useTheme} from '../lib/theme'

function TextInput({style, error, ...props}) {
  const [focus, setFocus] = useState(false)
  const {colors} = useTheme()
  const baseStyle = {
    padding: 12,
    borderColor: error ? colors.negative : focus ? colors.link : colors.border,
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
  console.log(props)
  return (
    <BaseTextInput
      style={[baseStyle, style]}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholderTextColor={colors.placeholder}
      {...props}
    />
  )
}

export default TextInput
