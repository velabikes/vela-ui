import React from 'react'
import {Box} from '@vela/ui'
import {Image as BaseImage, View, ActivityIndicator} from 'react-native'
import {useTheme} from '../lib/theme'

function Image({style, loading, round, ...props}) {
  const {colors} = useTheme()
  const baseContainerStyle = {
    overflow: 'hidden'
  }
  const baseActivityStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
  const baseStyle = {
    flex: 1,
    width: '100%',
    resizeMode: 'contain'
  }
  return (
    <Box style={[baseContainerStyle, style]} {...props}>
      {loading &&
        <ActivityIndicator style={baseActivityStyle} color={colors.link} />
      }
      {!loading &&
        <BaseImage
          style={[baseStyle, style]}
          {...props}
        />
      }
    </Box>
  )
}

export default Image
