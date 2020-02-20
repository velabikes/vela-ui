import React from 'react'
import {Navbar, Button, Icons} from '@vela/ui'

const Dashboard = ({navigation}) => {
  return (
    <Navbar title="Dashboard">
      <Button icon={Icons.Menu} solid onPress={() => navigation.openDrawer()} />
    </Navbar>
  )
}

export default Dashboard