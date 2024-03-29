import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import Box from "../Box";
import HeaderMenuButton from "./NavbarMenuButton";
import HeaderBackButton from "./NavbarBackButton";

export default function Navbar({ scene, previous }) {
  const safeArea = useSafeArea();
  const { top } = safeArea;
  const { options, navigation } = scene.descriptor;
  const title = options.title || scene.route.name;
  const { onBack, navRight } = options;
  const NavRight = navRight;

  return (
    <Box background="foreground">
      <Box style={{ paddingTop: top }}>
        <Box pad="large" direction="row" align="center">
          <Box flex>
            {previous && !onBack ? (
              <HeaderBackButton navigation={navigation} />
            ) : (
              navigation &&
              navigation.openDrawer && (
                <HeaderMenuButton navigation={navigation} />
              )
            )}
            {onBack && <HeaderBackButton onPress={onBack} />}
          </Box>
          <Box flex align="end" justify="center">
            {navRight && <NavRight />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
