import React from 'react'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Dashboard from './screens/Dashboard'
import Profile from './screens/Profile'
import Styleguide from './screens/Styleguide'
import Device from './screens/Device'
import IconsScreen from './screens/Icons'
import ChartsScreen from './screens/Charts'
import FormsScreen from './screens/Forms'

import {Icons, DrawerContent, Theme, Header} from '@vela/ui'
import Surface from '../../src/components/Surface'

const StackNavigator = createStackNavigator()
const Drawer = createDrawerNavigator()

const StyleguideNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        component={Styleguide}
        name="Styleguide"
        options={{header: Header}}
      />
    </StackNavigator.Navigator>
  )
}

const IconsNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        component={IconsScreen}
        name="Icons"
        options={{header: Header}}
      />
    </StackNavigator.Navigator>
  )
}

const FormsNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        component={FormsScreen}
        name="Forms"
        options={{header: Header}}
      />
    </StackNavigator.Navigator>
  )
}

const ChartsNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        component={ChartsScreen}
        name="Charts"
        options={{header: Header}}
      />
    </StackNavigator.Navigator>
  )
}

function App() {
  return (
    <Theme>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Styleguide"
          drawerContent={DrawerContent}>
          <Drawer.Screen
            name="Icons"
            component={IconsNavigator}
            options={{
              drawerLabel: 'Icons',
              drawerIcon: Icons.Bolt
            }}
          />
          <Drawer.Screen
            name="Charts"
            component={ChartsNavigator}
            options={{
              drawerLabel: 'Charts',
              drawerIcon: Icons.Bolt
            }}
          />
          <Drawer.Screen
            name="Forms"
            component={FormsNavigator}
            options={{
              drawerLabel: 'Forms',
              drawerIcon: Icons.Bolt
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{
              drawerLabel: 'Meu Perfil',
              drawerIcon: Icons.User
            }}
          />
          <Drawer.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              drawerLabel: 'Dashboard',
              drawerIcon: Icons.Location
            }}
          />
          <Drawer.Screen
            name="Device"
            component={Device}
            options={{
              drawerLabel: 'Minha Vela',
              drawerIcon: Icons.Logo
            }}
          />
          <Drawer.Screen
            name="Styleguide"
            component={StyleguideNavigator}
            options={{
              drawerLabel: 'Styleguide',
              drawerIcon: Icons.Bolt
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Theme>
  )
}

export default App
