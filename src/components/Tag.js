import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

function Tag({
  children,
  icon,
  label,
  onPress,
  labelStyle,
  iconStyle,
  containerStyle,
  ...props
}) {
  const baseContainerStyle = {
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#E9E7E4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginRight: 8
  }
  const baseIconStyle = {
    height: 12,
    width: 12,
    marginRight: 4
  }
  const baseLabelStyle = {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '600'
  }
  const Container = onPress ? TouchableOpacity : View
  const Icon = icon

  return (
    <Container onPress={onPress}>
      <View style={[baseContainerStyle, containerStyle]} {...props}>
        {Icon && <Icon style={{...baseIconStyle, ...iconStyle}} />}
        {label && <Text style={[baseLabelStyle, labelStyle]}>{label}</Text>}
        {children}
      </View>
    </Container>
  )
}

export default Tag
