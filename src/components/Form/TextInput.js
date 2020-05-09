import React, {useState} from 'react'
import {TextInput as BaseTextInput} from 'react-native'
import {useTheme} from '../../lib/theme'

function TextInput({style, error, onBlur, ...props}) {
  const {colors} = useTheme()
  const [focus, setFocus] = useState(false)
  const handleBlur = e => {
    setFocus(false)
    onBlur(e)
  }
  const handleFocus = () => setFocus(true)
  const baseStyle = {
    padding: 12,
    borderColor: error ? colors.negative : focus ? colors.secondary : colors.border,
    borderWidth: 1,
    borderRadius: 14,
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: colors.input,
    color: colors.text
  }

  return (
    <BaseTextInput
      style={[baseStyle, style]}
      placeholderTextColor={colors.placeholder}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...props}
    />
  )
}

export default TextInput
