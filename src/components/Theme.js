import React from 'react'
import {ThemeContext} from '../lib/theme'
import { AppearanceProvider } from 'react-native-appearance';

const Theme = ({children}) =>
  <AppearanceProvider>
    <ThemeContext.Provider>{children}</ThemeContext.Provider>
  </AppearanceProvider>

export default Theme
