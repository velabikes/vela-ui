import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useTheme} from '../../lib/theme'
import Text from '../Text'
import Box from '../Box'

const DrawerItem = ({ navigation, icon, label, routeName, focused}) => {
  const {colors} = useTheme()
  const baseIconStyle = {
    width: 24,
    height: 24,
    color: colors.title
  }
  const Icon = icon

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Box pad={{vertical: "large", horizontal: "xlarge"}} direction="row" gap='large' background={focused && 'foreground'}>
        <Icon style={baseIconStyle} />
        <Text size='large' weight='500'>{label}</Text>
      </Box>
    </TouchableOpacity>
  )
}

export default DrawerItem
