import React from "react";
import Surface from "./Surface";
import { useTheme } from "../lib/theme";

const Box = ({
  children,
  style,
  pad,
  background,
  ...props
}) => {
  const { metrics, colors } = useTheme();
  const baseStyle = {
    padding: metrics.margin[pad] || 0,
    background: colors[background] || 'transparent',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Math.round(elevation * 0.42857 + 0.142857),
    },
    shadowOpacity: 0.16 + elevation * 0.02,
    shadowRadius: Math.round(0.647 * elevation + 0.237),
    elevation: elevation || 0,
  }
  return (
    <Surface style={[baseStyle, style]} {...props}>
      {children}
    </Surface>
  );
};

export default Box;
