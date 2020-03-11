import React from "react";
import { TouchableOpacity } from "react-native";
import { Icons } from "@vela/ui";
import { useNavigation } from "@react-navigation/native";

export default function HeaderMenuButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Icons.Menu />
    </TouchableOpacity>
  );
}
