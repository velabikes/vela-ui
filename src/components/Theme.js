import React from 'react'
import {ThemeContext, LocaleContext} from '../lib/theme'

const Theme = ({children, value, locale}) =>
  {
    console.log(locale)
    return (
      <ThemeContext.Provider value={value}>
        <LocaleContext.Provider value={locale}>
          {children}
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    )
  }

export default Theme
