import TextInput from './TextInput'
import React from 'react'
import { TextInputMask } from 'react-native-masked-text'

export default props => (
  <TextInputMask
    type={"cel-phone"}
    options={{
      maskType: "BRL",
      withDDD: true,
      dddMask: "(99) "
    }}
    customTextInput={TextInput}
    {...props}
  />
)
