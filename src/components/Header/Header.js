import React from "react";
import { SafeAreaView, View } from "react-native";
import Box from "../Box";
import HeaderMenuButton from "./HeaderMenuButton";
import Heading from "../Heading";
import Surface from "../Surface";

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

export default function Header({ scene }) {
  const { options } = scene.descriptor;
  const title = options.title || scene.route.name;

  return (
    <Surface>
      <SafeAreaView>
        <Box style={boxStyle}>
          <View style={segmentStyle}>
            <HeaderMenuButton />
          </View>
          <View style={segmentStyle}>
            <Heading size="xs" style={titleStyle}>
              {title}
            </Heading>
          </View>
          <View style={segmentStyle} />
        </Box>
      </SafeAreaView>
    </Surface>
  );
}
