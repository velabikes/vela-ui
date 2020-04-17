import React from 'react'
import Text from '../Text'
import {useTheme} from '../../lib/theme'

function Heading({children, style, size}) {
  const {typo: {subheading}} = useTheme()

  return (
    <Text size={subheading.size[size] || size || subheading.size.medium} weight='500'>{children}</Text>
  )
}

export default Heading
