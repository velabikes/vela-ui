import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useTheme} from '../../lib/theme'
import Text from '../Text'
import Box from '../Box'

const DrawerItem = ({ navigation, icon, label, routeName}) => {
  const {colors} = useTheme()
  const baseIconStyle = {
    width: 24,
    height: 24,
    color: colors.title
  }
  const baseTextStyle = {
    fontSize: 18,
    color: colors.title,
    marginLeft: 16
  }
  const Icon = icon
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Box pad={{vertical: "medium"}} direction="row">
        <Icon style={baseIconStyle} />
        <Text style={baseTextStyle}>{label}</Text>
      </Box>
    </TouchableOpacity>
  )
}

export default DrawerItem
