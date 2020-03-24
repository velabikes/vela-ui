import React from 'react'
import {View} from 'react-native'
import Text from '@vela/ui/src/components/Text'
import {Down} from '@vela/ui/src/components/Icons'
import {useTheme} from '@vela/ui/src/lib/theme'

function SelectInput({focus, placeholder, error, selected}) {
  const {colors} = useTheme()
  const inputStyle = {
    padding: 12,
    borderColor: error ? colors.negative : focus ? colors.link : colors.border,
    borderWidth: 1,
    borderRadius: 14,
    fontSize: 16,
    lineHeight: 20,
    color: colors.text,
    backgroundColor: colors.input,
    flexDirection: 'row'
  }
  const textStyle = {
    fontSize: 16,
    lineHeight: 20,
    flex: 1,
    color: colors.text
  }
  const placeholderStyle = {
    ...textStyle,
    color: colors.placeholder
  }
  const arrowStyle = {
    width: 16,
    height: 20,
    color: colors.footnote
  }
  return (
    <View style={inputStyle}>
      {placeholder && !selected && (
        <Text style={placeholderStyle}>{placeholder}</Text>
      )}
      {selected && <Text style={textStyle}>{selected}</Text>}
      <Down style={arrowStyle} />
    </View>
  )
}

export default SelectInput
