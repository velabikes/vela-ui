import React from "react";
import { TouchableOpacity } from "react-native";
import { Icons } from "@vela/ui";

export default function HeaderMenuButton({navigation}) {
  return (
    <TouchableOpacity onPress={navigation && navigation.openDrawer}>
      <Icons.Menu />
    </TouchableOpacity>
  );
}
