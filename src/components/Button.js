import React from "react";
import Text from "./Text";
import Box from "./Box";

function Button({ style, textStyle, size = "large", background, color, round, icon, label, onPress, ...props }) {
  const Icon = icon;

  return (
    <Box
      background={background}
      round={round || size}
      pad="medium"
      style={style}
      onPress={onPress}
    >
      <Box pad="small" direction="row" align="center" {...props}>
        <Box width='20%' align="center">
          {Icon && <Icon size={size} background={background} />}
        </Box>
        <Box width='60%' align="center">
          {label && (
            <Text style={textStyle} color={color} size={size} weight="bold" background={background}>
              {label}
            </Text>
          )}
        </Box>
        <Box width='20%' />
      </Box>
    </Box>
  );
}

export default Button;
