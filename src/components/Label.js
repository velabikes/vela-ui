import React from 'react'
import Text from './Text'
import {useTheme} from '../lib/theme'

const Label = ({children, style}) => {
  const {colors} = useTheme()
  const baseStyle = {
    color: colors.footnote,
    fontWeight: '600',
    fontSize: 14
  }
  return <Text style={[baseStyle, style]}>{children}</Text>
}

export default Label
