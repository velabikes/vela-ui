import React from 'react'
import {View} from 'react-native'
import {useTheme} from '../lib/theme'
import TextInput from './TextInput'
import Label from './Label'
import Spacer from './Spacer'
import Footnote from './Footnote'

function TextField({label, error, ...props}) {
  const {colors} = useTheme()
  const baseErrorStyle = {
    color: colors.negative,
  }
  return (
    <View>
      <Label>{label}</Label>
      <Spacer size="xs" />
      <TextInput error={error} {...props} />
      <Footnote style={baseErrorStyle}>{error}</Footnote>
      <Spacer size="s" />
    </View>
  )
}

export default TextField
