import React from 'react'
import { Button } from '@vela/ui'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './screens/Dashboard'
import Profile from './screens/Profile'
import Styleguide from './screens/Styleguide'
import { Icons } from '@vela/ui'

const Drawer = createDrawerNavigator()

function DrawerContent ({state, descriptors}) {
  return state.routes.map(route => {
    const { drawerLabel, drawerIcon } = descriptors[route.key].options
    return <DrawerItem icon={drawerIcon} label={drawerLabel} {...route} />
  })
}

function DrawerItem ({label, icon}) {
  return <Button label={label} icon={icon}  />
}

function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard" drawerContent={DrawerContent}>
        <Drawer.Screen name="Dashboard" component={Dashboard} 
            options={{
              drawerLabel: 'Home',
              drawerIcon: (Icons.Logo)
            }} 
        />      
        <Drawer.Screen name="Profile" component={Profile} 
          options={{
            drawerLabel: 'Meu Perfil',
            drawerIcon: (Icons.User)
            }} 
        />
        <Drawer.Screen name="Styleguide" component={Styleguide} 
          options={{
            drawerLabel: 'Styleguide',
            drawerIcon: (Icons.Bolt)
            }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
