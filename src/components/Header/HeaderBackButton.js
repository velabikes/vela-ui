import React from "react";
import { TouchableOpacity } from "react-native";
import { Icons } from "@vela/ui";

export default function HeaderBackButton({navigation}) {
  return (
    <TouchableOpacity onPress={navigation && navigation.goBack}>
      <Icons.Back />
    </TouchableOpacity>
  );
}
