import React, { useState } from 'react'
import Box from '../Box'
import Text from '../Text'
import { Icons } from '../..'
import { useTheme } from '../../lib/theme'

function SelectInput({value, name, onChangeText, options, placeholder, error, onBlur, ...props}) {
  const { colors } = useTheme()
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const onPressHandler = () => {
    setIsOptionsVisible(!isOptionsVisible)
  }
  const selectedOption = options.find(option => option.value === value)
  const inputStyle = {
    padding: 12,
    borderBottomWidth: 1,
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: colors.input,
    color: colors.text,
    borderColor: error ? colors.negative : colors.border
  }
  
  const optionsStyle = {
    backgroundColor: colors.border,
    padding: 8,
    borderColor: colors.background,
    borderBottomWidth: 1
  }

  const backdropStyle = {
    position: 'absolute',
    top: 4,
    right: 0,
    bottom: 0,
    left: 0,
  }
  return (
    <>
      <Box style={backdropStyle}/>
      <Box>
        <Box  
          onPress={onPressHandler}
          style={inputStyle} 
          direction="row"
          justify="between"
          {...props}
        >
          <Text>{
            selectedOption
              ? selectedOption.label
              : <Text color="placeholder">{placeholder}</Text>
            }</Text>
            {isOptionsVisible ? <Icons.Up /> : <Icons.Down />}
        </Box>
        {isOptionsVisible &&
            <Box>
              {options.map(({value, label}) =>
                <Box 
                  style={optionsStyle} 
                  key={value} 
                  onPress={() => { 
                    onBlur({target:{name}})
                    onChangeText(value)
                    setIsOptionsVisible(false)
                  }}
                >
                  <Text key={value}>{label}</Text>
                </Box>)
              }
            </Box>
        }
      </Box>
    </>
  )
}

export default SelectInput
