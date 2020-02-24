import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useTheme} from '../lib/theme'
import Text from './Text'

const DrawerItem = ({ navigation, icon, label, routeName}) => {
  const {colors} = useTheme()
  const baseTouchableStyle = {
    flexDirection: 'row',
    padding: 12
  }
  const baseIconStyle = {
    width: 24,
    height: 24,
    color: colors.title
  }
  const baseTextStyle = {
    fontSize: 18,
    color: colors.title,
    marginLeft: 24
  }
  const Icon = icon
  return (
    <TouchableOpacity style={baseTouchableStyle} onPress={() => navigation.navigate(routeName)}>
      <Icon style={baseIconStyle} />
      <Text style={baseTextStyle}>{label}</Text>
    </TouchableOpacity>
  )
}

export default DrawerItem
