import React from 'react'
import Text from '../Text'
import Box from '../Box'

const Paragraph = ({children, ...props}) => {

  return (
    <Box pad={{vertical: 'small'}}>
      <Text {...props}>{children}</Text>
    </Box>
  )
}

export default Paragraph
