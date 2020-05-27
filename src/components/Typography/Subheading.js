import React from 'react'
import Text from '../Text'
import {useTheme} from '../../lib/theme'

function Heading({children, style, size, ...props}) {
  const {typography: {subheading}} = useTheme()

  return (
    <Text
      style={style}
      size={subheading.size[size] || size || subheading.size.medium}
      weight='600'
      {...props}
    >
      {children}
    </Text>
  )
}

export default Heading
