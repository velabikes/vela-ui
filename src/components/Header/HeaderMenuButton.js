import React from "react";
import { TouchableOpacity } from "react-native";
import { Icons } from "@vela/ui";
//import { useNavigation } from "@react-navigation/native";

export default function HeaderMenuButton() {
  //const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <Icons.Menu />
    </TouchableOpacity>
  );
}
