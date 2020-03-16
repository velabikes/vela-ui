import React from "react";
import { SafeAreaView, View } from "react-native";
import Box from "../Box";
import HeaderMenuButton from "./HeaderMenuButton";
import Heading from "../Heading";
import Surface from "../Surface";
import Backdrop from "../Backdrop";

const boxStyle = {
  flexDirection: "row",
  alignItems: "center"
};

const segmentStyle = {
  flex: 1
};

const titleStyle = {
  textAlign: "center"
};

const floatStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0
}

export default function Header({ scene }) {
  const { options, navigation } = scene.descriptor;
  const title = options.title || scene.route.name;

  return (
    <Backdrop>
      <SafeAreaView>
        <Box style={boxStyle}>
          <View style={segmentStyle}>
            { navigation && navigation.openDrawer && <HeaderMenuButton /> }
          </View>
          <View style={segmentStyle}>
            <Heading size="xs" style={titleStyle}>
              {title}
            </Heading>
          </View>
          <View style={segmentStyle} />
        </Box>
      </SafeAreaView>
    </Backdrop>
  );
}
