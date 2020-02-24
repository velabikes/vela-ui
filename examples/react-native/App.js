import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './screens/Dashboard'
import Profile from './screens/Profile'
import Styleguide from './screens/Styleguide'
import Device from './screens/Device'
import { Icons, DrawerContent } from '@vela/ui'

const Drawer = createDrawerNavigator()

function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard" drawerContent={DrawerContent}>
        <Drawer.Screen name="Profile" component={Profile} 
          options={{
            drawerLabel: 'Meu Perfil',
            drawerIcon: (Icons.User)
            }} 
        />
        <Drawer.Screen name="Dashboard" component={Dashboard} 
            options={{
              drawerLabel: 'Dashboard',
              drawerIcon: (Icons.Location)
            }} 
        />      
        <Drawer.Screen name="Device" component={Device} 
          options={{
            drawerLabel: 'Minha Vela',
            drawerIcon: (Icons.Logo)
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
