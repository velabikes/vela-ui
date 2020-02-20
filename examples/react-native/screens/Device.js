import React from 'react'
import {Navbar, Button, Icons} from '@vela/ui'

const Device = ({navigation}) => {
  return (
    <Navbar title="Minha Vela">
      <Button icon={Icons.Menu} solid onPress={() => navigation.openDrawer()} />
    </Navbar>
  )
}

export default Device