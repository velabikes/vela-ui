import React from 'react'
import Box from './Box'

export default function Header({ ...props }) {
  return (
    <Box
      align="center"
      as="header"
      direction="row"
      flex={false}
      justify="between"
      gap="medium"
      {...props}
    />
  )
}