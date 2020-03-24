import React from 'react'
import TextInput from './TextInput'
import FieldBase from './FieldBase'

function TextField(props) {

  return (
      <FieldBase {...props} input={TextInput} />
  )
}

export default TextField
