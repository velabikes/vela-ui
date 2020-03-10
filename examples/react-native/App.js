import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './screens/Dashboard'
import Profile from './screens/Profile'
import Styleguide from './screens/Styleguide'
import Device from './screens/Device'
import { Icons, DrawerContent, Theme } from '@vela/ui'
import { Button, Text } from 'react-native'
import { useColorScheme } from 'react-native-appearance'

const StackNavigator = createStackNavigator()
const Drawer = createDrawerNavigator()

const StyleguideNavigator = () => {
  const navigation = useNavigation()
  const cs = useColorScheme()
  alert(cs)
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        component={Styleguide}
        name="Styleguide"
        options={{headerLeft: () =>
          <Icons.Menu onPress={navigation.openDrawer} />
        }}
      />
    </StackNavigator.Navigator>
  )
}

function App () {
  return (
    <Theme>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Styleguide" drawerContent={DrawerContent}>
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
        <Drawer.Screen name="Styleguide" component={StyleguideNavigator} 
          options={{
            drawerLabel: 'Styleguide',
            drawerIcon: (Icons.Bolt)
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
    </Theme>
  )
}

export default App
