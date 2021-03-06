import React from 'react'
import {useTheme} from '../../lib/theme'
import Text from '../Text'

function Footnote({children, style, ...props}) {
  const {colors} = useTheme()
  const baseStyle = {
    fontSize: 13,
    minHeight: 16,
    color: colors.footnote,
    fontWeight: '600',
  }

  return <Text style={[baseStyle, style]} {...props}>{children}</Text>
}

export default Footnote
