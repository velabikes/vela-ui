import React from 'react'
import Text from './Text'
import {useTheme} from '../lib/theme'

const Label = ({style, ...props}) => {
  const {colors} = useTheme()
  const baseStyle = {
    color: colors.footnote,
  }
  return <Text style={[baseStyle, style]} weight='600' {...props} />
}

export default Label
