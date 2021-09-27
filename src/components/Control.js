import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../lib/theme";
import Label from "./Label";
import Box from "./Box";
import Footnote from "./Typography/Footnote";

function Control({ options, onSelect, selected }) {
  const { colors } = useTheme();

  return (
    <>
      {options.map(({ value, description }) => {
        const isSelected = value === selected;
        return (
          <Box key={`note-${value}`}>
            {isSelected && <Footnote>{description}</Footnote>}
          </Box>
        );
      })}
      <Box justify="around" direction="row" background="foreground">
        {options.map(({ label, icon, value }) => {
          const isSelected = value === selected;
          const baseStyle = {
            borderRadius: 46,
            height: 64,
            width: 64,
            marginTop: 12,
          };
          const baseItemStyle = {
            padding: 12,
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 46,
            height: 64,
            width: 64,
            ...(isSelected && {
              backgroundColor: colors.text,
            }),
          };
          const baseTextStyle = {
            fontSize: 16,
            lineHeight: 16,
            color: isSelected ? colors.background : colors.disabled,
          };
          const baseIconStyle = {
            width: 16,
            height: 16,
            marginRight: 4,
            color: isSelected ? colors.background : colors.disabled,
          };
          const Icon = icon;
          return (
            <Box key={`opt-${value}`} background="midground" style={baseStyle}>
              <TouchableOpacity
                style={baseItemStyle}
                onPress={() => onSelect(value)}
              >
                {icon && <Icon style={baseIconStyle} />}
                {label && <Label style={baseTextStyle}>{label}</Label>}
              </TouchableOpacity>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Control;
