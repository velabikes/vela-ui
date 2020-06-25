import React from "react";
import { TouchableOpacity } from "react-native";
import Icons from "../Icons";

export default function NavbarMenuButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={navigation && navigation.openDrawer}
      hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
    >
      <Icons.Menu />
    </TouchableOpacity>
  );
}
