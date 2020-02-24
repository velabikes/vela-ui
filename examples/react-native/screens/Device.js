import React from 'react'
import {Button, Icons} from '@vela/ui'

const Device = ({navigation}) => {
  return (
      <Button icon={Icons.Menu} solid onPress={() => navigation.openDrawer()} />
  )
}

export default Device