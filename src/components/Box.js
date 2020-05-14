import React, {Children} from "react"
import {View, TouchableOpacity} from "react-native"
import { useTheme } from "../lib/theme"
import { Gap } from ".."

const FLEX_MAP = {
  [true]: 1,
  [false]: 0,
  grow: '1 0',
  shrink: '0 1',
}

const ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
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
  pad = 0,
  flex,
  direction,
  justify,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  align,
  elevation = 0,
  round,
  background,
  gap,
  height,
  width,
  onPress,
  ...props
}) => {
  const { margin, colors, layout } = useTheme();
  const baseStyle = {
    display: 'flex',
    flex: FLEX_MAP[flex] || 0,
    flexDirection: direction || 'column',
    justifyContent: JUSTIFY_MAP[justify] || 'flex-start',
    alignItems: ALIGN_MAP[align] || 'stretch',
    paddingRight:  margin[pad] || margin[pad.right] || margin[pad.horizontal],
    paddingLeft:  margin[pad] || margin[pad.left] || margin[pad.horizontal],
    paddingTop:  margin[pad] || margin[pad.top] || margin[pad.vertical],
    paddingBottom:  margin[pad] || margin[pad.bottom] || margin[pad.vertical],
    borderRadius: margin[round] || (round === 'full' ? 999 : round),
    maxWidth,
    maxHeight,
    minHeight,
    minWidth,
    height: layout[height] || height,
    width: layout[width] || width,
    backgroundColor: colors[background] || 'transparent',
    ...(elevation && {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: Math.round(elevation * 0.42857 + 0.142857),
      },
      shadowOpacity: 0.16 + elevation * 0.02,
      shadowRadius: Math.round(0.647 * elevation + 0.237),
      elevation: elevation,
    })
  }

  let contents = children
  if (gap) {
    contents = []
    Children.forEach(children, (child, index) => {
      contents.push(child)
      if (index !== children.length - 1) contents.push(<Gap size={gap} key={`gap-${index}`}/>)
    })
  }

  const Component = onPress ? TouchableOpacity : View

  return (
    <Component style={[baseStyle, style]} onPress={onPress} {...props}>
      {contents}
    </Component>
  )
}

export default Box
