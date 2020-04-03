import React from "react"
import Surface from "../Surface"
import { useTheme } from "../../lib/theme"

const FLEX_MAP = {
  [true]: '1 1',
  [false]: '0 0',
  grow: '1 0',
  shrink: '0 1',
}

const JUSTIFY_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
};

const Box = ({
  children,
  style,
  pad,
  flex,
  direction,
  justify,
  elevation = 0,
  background,
  ...props
}) => {
  const { margin, colors } = useTheme();
  const baseStyle = {
    display: 'flex',
    flex: FLEX_MAP[flex] || 'auto',
    flexDirection: direction || 'column',
    justifyContent: JUSTIFY_MAP[justify] || 'flex-start',
    padding: margin[pad] || 0,
    background: colors[background] || 'transparent',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Math.round(elevation * 0.42857 + 0.142857),
    },
    shadowOpacity: 0.16 + elevation * 0.02,
    shadowRadius: Math.round(0.647 * elevation + 0.237),
    elevation: elevation,
  }

  return (
    <Surface style={[baseStyle, style]} {...props}>
      {children}
    </Surface>
  )
}

export default Box
