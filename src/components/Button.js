import React from "react";
import Text from "./Text";
import Box from "./Box";

function Button({
  style,
  textStyle,
  size = "large",
  background,
  color,
  round,
  icon,
  label,
  onPress,
  ...props
}) {
  const Icon = icon;
  const {colors} = useTheme()

  return (
    <Box
      background={background}
      round={round || size}
      pad="medium"
      style={style}
      onPress={onPress}
      {...props}
    >
      <Box pad="small" direction="row" align="center">
        {Icon && <Box minWidth="20%" align="center">
          <Icon size={size} background={background} style={{color: colors.title}}/>
        </Box>}
        {label && (
          <Box flex align="center">
            <Text
              style={textStyle}
              color={color}
              size={size}
              weight="bold"
              background={background}
            >
              {label}
            </Text>
          </Box>
        )}
        {Icon && label && <Box minWidth="20%" />}
      </Box>
    </Box>
  );
}

export default Button;
