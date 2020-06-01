import React, { useState } from 'react'
import Box from '../Box'
import Text from '../Text'

const SelectInput = ({ value, onChangeText, options, placeholder }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const onPressHandler = () => {
    setIsOptionsVisible(!isOptionsVisible)
  }

  const selectedOption = options.find(option => option.value === value)

  return (
    <>
      <Box style={backdropStyle} />
      <Box>
        <Box onPress={onPressHandler}>
          <Text>{
            selectedOption
              ? selectedOption.label
              : placeholder
            }</Text>
        </Box>
        {isOptionsVisible &&
            <Box style={optionsStyle} >
              {options.map(({value, label}) =>
                <Box onPress={() => {
                  onChangeText(value)
                }}>
                  <Text key={value}>{label}</Text>
                </Box>)
              }
            </Box>
        }
      </Box>
    </>
  )
}

const backdropStyle = {
  backgroundColor: 'green',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

const optionsStyle = {
  backgroundColor: 'red'
}

export default SelectInput
