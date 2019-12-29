import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {useTheme} from '../lib/theme'
import Image from './Image'

function Card({children, blur, image, contentStyle, containerStyle, onPress}) {
  const {colors} = useTheme()
  const Container = onPress ? TouchableOpacity : View

  const baseContainerStyle = {
    shadowColor: '#000',
    backgroundColor: colors.foreground,
    borderRadius: 24,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.13,
    shadowRadius: 1,
    elevation: 1
  }
  const baseImageStyle = {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 200
  }
  const baseContentStyle = {
    padding: 24,
    ...(image && {paddingTop: 16})
  }

  return (
    <Container style={[baseContainerStyle, containerStyle]} onPress={onPress}>
      {image && <Image source={image} style={baseImageStyle} />}

      <View style={[baseContentStyle, contentStyle]} blurType="light">
        {children}
      </View>
    </Container>
  )
}

export default Card
