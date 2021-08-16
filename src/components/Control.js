import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useTheme} from '../lib/theme'
import Label from './Label'
import Box from './Box'
import Footnote from './Typography/Footnote'

function Control({options, onSelect, selected}) {
  const {colors} = useTheme()

  return (
    <>
    <Box 
      flex 
      justify="center" 
      direction="row" 
      background="midground"
      round={36}>
      {options.map(({label, icon, value}) => {
        const isSelected = value === selected
        const baseItemStyle = {
          padding: 12,
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: 36,
          ...(isSelected && {
            backgroundColor: colors.secondary
          })
        }
        const baseTextStyle = {
          fontSize: 16,
          lineHeight: 16,
          color: isSelected ? colors.background : colors.disabled
        }
        const baseIconStyle = {
          width: 16,
          height: 16,
          marginRight: 4,
          color: isSelected ? colors.background : colors.disabled
        }
        const Icon = icon
        return (
          <TouchableOpacity
            style={baseItemStyle}
            key={value}
            onPress={() => onSelect(value)}>
            {icon && <Icon style={baseIconStyle} />}
            {label && <Label style={baseTextStyle}>{label}</Label>}
          </TouchableOpacity>
        )
      })}
    </Box>

    {options.map(({value, description}) => {
      const isSelected = value === selected
      return (
        <>
          {isSelected && <Footnote>{description}</Footnote>}
        </>
      )}
    )}
    </>
  )
}

export default Control
