import React from 'react'
import {ThemeContext} from '../lib/theme'

const Theme = ({children, ...props}) =>
  <ThemeContext.Provider {...props}>{children}</ThemeContext.Provider>

export default Theme
