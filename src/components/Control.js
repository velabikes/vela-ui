import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {useTheme} from '../lib/theme'
import Label from './Label'

function Control({options, onSelect, selected}) {
  const {colors} = useTheme()
  const baseStyle = {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.link,
    borderRadius: 32,
    overflow: 'hidden'
  }
  return (
    <View style={baseStyle}>
      {options.map(({label, icon, value}) => {
        const isSelected = value === selected
        const baseItemStyle = {
          padding: 8,
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          ...(isSelected && {
            backgroundColor: colors.link
          })
        }
        const baseTextStyle = {
          fontSize: 16,
          lineHeight: 16,
          color: isSelected ? colors.background : colors.link
        }
        const baseIconStyle = {
          width: 16,
          height: 16,
          marginRight: 4,
          color: isSelected ? colors.background : colors.link
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
    </View>
  )
}

export default Control
