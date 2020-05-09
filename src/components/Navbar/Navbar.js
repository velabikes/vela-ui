import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import Box from "../Box";
import HeaderMenuButton from "./NavbarMenuButton";
import HeaderBackButton from "./NavbarBackButton";
import Heading from "../Typo/Heading";

export default function Navbar({ scene, previous }) {
  const { options, navigation } = scene.descriptor;
  const title = options.title || scene.route.name;
  const { onBack } = options;
  const insets = useSafeArea();

  return (
    <Box background="foreground">
      <Box style={{ paddingTop: insets.top }}>
        <Box pad="large" direction="row" align="center">
          <Box flex>
            {navigation && navigation.openDrawer && (
              <HeaderMenuButton navigation={navigation} />
            )}
            {previous && !onBack && (
              <HeaderBackButton navigation={navigation} />
            )}
            {onBack && <HeaderBackButton onPress={onBack} />}
          </Box>
          <Box flex>
            <Heading size="small" textAlign="center">
              {title}
            </Heading>
          </Box>
          <Box flex />
        </Box>
      </Box>
    </Box>
  );
}
