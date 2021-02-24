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
import DrawerHeader from './components/DrawerHeader'

import {Icons, DrawerContent, Theme, Navbar} from '@vela/ui'

const StackNavigator = createStackNavigator()
const Drawer = createDrawerNavigator()

const StyleguideNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        component={Styleguide}
        name="Styleguide"
        options={{header: Navbar}}
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
        options={{header: Navbar}}
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
          drawerContent={DrawerContent}
          drawerContentOptions={{drawerHeader: DrawerHeader}}>
          <Drawer.Screen
            name="Styleguide"
            component={StyleguideNavigator}
            options={{
              drawerLabel: 'Styleguide',
              drawerIcon: Icons.Logo
            }}
          />
          <Drawer.Screen
            name="Icons"
            component={IconsNavigator}
            options={{
              drawerLabel: 'Icons',
              drawerIcon: Icons.Bolt
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Theme>
  )
}

export default App
