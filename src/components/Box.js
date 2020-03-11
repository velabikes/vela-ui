import React from "react";
import Surface from "./Surface";
import { useTheme } from "../lib/theme";

const Box = ({ children, style, ...props }) => {
  const { metrics } = useTheme();
  const baseStyle = {
    padding: metrics.padding
  };
  return (
    <Surface style={[baseStyle, style]} {...props}>
      {children}
    </Surface>
  );
};

export default Box;
