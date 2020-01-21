import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {useTheme} from '../lib/theme'
import Text from './Text'

function Button({style, solid, disabled, variant, icon, label, onPress}) {
  const {colors} = useTheme()
  const variantStyles = {
    default: {
      color: !solid ? colors.link : colors.background,
      ...(solid && {backgroundColor: colors.link})
    },
    primary: {
      color: !solid ? colors.primary : colors.background,
      ...(solid && {backgroundColor: colors.primary})
    },
    secondary: {
      color: !solid ? colors.secondary : colors.background,
      ...(solid && {backgroundColor: colors.secondary})
    },
    negative: {
      color: !solid ? colors.negative : colors.background,
      ...(solid && {backgroundColor: colors.negative})
    },
    disabled: {
      color: colors.footnote,
      ...(solid && {backgroundColor: colors.disabled})
    }
  }
  const variantStyle =
    variantStyles[variant || (disabled && 'disabled') || 'default']
  const baseContainerStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
    ...variantStyle
  }
  const baseIconStyle = {
    width: 14,
    height: 14,
    marginRight: 4,
    color: variantStyle.color
  }
  const baseTextStyle = {
    fontSize: 16,
    lineHeight: 16,
    color: variantStyle.color,
    fontWeight: 'bold',
    fontFamily: 'Barlow',
    ...variantStyle
  }
  const Icon = icon
  const Container = disabled ? View : TouchableOpacity
  return (
    <Container style={[baseContainerStyle, style]} onPress={onPress}>
      {Icon && <Icon style={baseIconStyle} />}
      {label && <Text style={baseTextStyle}>{label}</Text>}
    </Container>
  )
}

export default Button
