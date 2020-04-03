import React from "./node_modules/react";
import { TouchableOpacity } from "react-native";
import { Icons } from "./node_modules/@vela/ui";

export default function NavbarMenuButton({navigation}) {
  return (
    <TouchableOpacity onPress={navigation && navigation.openDrawer}>
      <Icons.Menu />
    </TouchableOpacity>
  );
}
