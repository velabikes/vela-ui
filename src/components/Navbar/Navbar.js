import React from "react";
import { SafeAreaView, View } from "react-native";
import Box from "../Box";
import HeaderMenuButton from "./NavbarMenuButton";
import HeaderBackButton from "./NavbarBackButton";
import Heading from "../Typo/Heading";

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

export default function Navbar({ scene, previous }) {
  const { options, navigation } = scene.descriptor;
  const title = options.title || scene.route.name;

  return (
    <Box>
      <SafeAreaView>
        <Box pad="large" direction="row" align="center">
          <View style={segmentStyle}>
            { navigation && navigation.openDrawer && <HeaderMenuButton navigation={navigation} /> }
            { previous && <HeaderBackButton navigation={navigation} /> }
          </View>
          <View style={segmentStyle}>
            <Heading size="xs" style={titleStyle}>
              {title}
            </Heading>
          </View>
          <View style={segmentStyle} />
        </Box>
      </SafeAreaView>
    </Box>
  );
}
