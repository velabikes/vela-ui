import React from 'react'
import {Image as BaseImage, View, ActivityIndicator} from 'react-native'
import {useTheme} from '../lib/theme'

function Image({style, loading, round, ...props}) {
  const {colors} = useTheme()
  const baseContainerStyle = {
    backgroundColor: colors.border,
    ...(round && {borderRadius: 32}),
    overflow: 'hidden'
  }
  const baseActivityStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
  const baseStyle = {
    flex: 1
  }
  return (
    <View style={[baseContainerStyle, style]}>
      <ActivityIndicator style={baseActivityStyle} color={colors.link} />
      {!loading && <BaseImage style={[baseStyle, style]} {...props} />}
    </View>
  )
}

export default Image
