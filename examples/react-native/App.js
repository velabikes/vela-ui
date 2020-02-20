import React from 'react'
import { Button } from '@vela/ui'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './screens/Dashboard'
import Profile from './screens/Profile'
import Styleguide from './screens/Styleguide'
import Device from './screens/Device'
import { Icons } from '@vela/ui'

const Drawer = createDrawerNavigator()

function DrawerContent ({navigation, state, descriptors}) {
  return state.routes.map(route => {
    const { drawerLabel, drawerIcon } = descriptors[route.key].options
    return <DrawerItem icon={drawerIcon} label={drawerLabel} routeName={route.name} navigation={navigation} />
  })
}

const DrawerItem = ({ navigation, icon, label, routeName}) => {
  return (
    <Button onPress={() => navigation.navigate(routeName)} icon={icon} label={label} />
  )
}

function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard" drawerContent={DrawerContent}>
        <Drawer.Screen name="Dashboard" component={Dashboard} 
            options={{
              drawerLabel: 'Home',
              drawerIcon: (Icons.Location)
            }} 
        />      
        <Drawer.Screen name="Profile" component={Profile} 
          options={{
            drawerLabel: 'Meu Perfil',
            drawerIcon: (Icons.User)
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
