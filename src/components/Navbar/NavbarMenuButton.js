import React from "react";
import { TouchableOpacity } from "react-native";
import Icons from "../Icons";

export default function NavbarMenuButton({navigation}) {
  return (
    <TouchableOpacity onPress={navigation && navigation.openDrawer}>
      <Icons.Menu />
    </TouchableOpacity>
  );
}
