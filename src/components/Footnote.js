import React from 'react'
import {useTheme} from '../lib/theme'
import Text from './Text'

function Footnote({children, style}) {
  const {colors} = useTheme()
  const baseStyle = {
    fontSize: 13,
    color: colors.footnote,
    fontWeight: '600'
  }

  return <Text style={[baseStyle, style]}>{children}</Text>
}

export default Footnote
