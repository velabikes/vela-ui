import React from 'react'
import { Icons } from '@vela/ui'
import { useNavigation } from '@react-navigation/native'

export default function HeaderMenuButton() {
  const navigation = useNavigation()
  return <Icons.Menu onPress={navigation.openDrawer} />
}