import React from 'react'
import {useSelector} from 'react-redux'
import {Box, ProfileImage, Subheading, Footnote, Gap} from '@vela/ui'
import {profileSelector} from '../store/profile/selectors'
import {authSelector} from '../store/auth/selectors'

const defaultPhoto = require('../assets/nouser.png')

const DrawerHeader = () => {
  return (
    <Box pad="large" direction="row" justify="start" align="center">
      <Gap size="large" />
      <Box flex>
        <Subheading numberOfLines={1}>Teste</Subheading>
        <Footnote numberOfLines={1}>Teste</Footnote>
      </Box>
    </Box>
  )
}

export default DrawerHeader
