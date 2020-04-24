import React from "react"
import { TouchableOpacity } from "react-native"
import Icons from "../Icons"

export default function NavbarBackButton({navigation, onPress}) {
  return (
    <TouchableOpacity onPress={onPress || (navigation && navigation.goBack)}>
      <Icons.Back />
    </TouchableOpacity>
  );
}
