import React from 'react'
import {Navbar, Button, Icons} from '@vela/ui'

const Profile = ({ navigation }) => {
  return (
    <Navbar title="Meu Perfil">
      <Button icon={Icons.Menu} solid onPress={() => navigation.openDrawer()} />
    </Navbar>
  )
}

export default Profile