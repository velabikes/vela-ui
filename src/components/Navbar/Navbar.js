import React from "react";
import { SafeAreaView, View } from "react-native";
import Box from "../Box";
import HeaderMenuButton from "./NavbarMenuButton";
import HeaderBackButton from "./NavbarBackButton";
import Heading from "../Typo/Heading";

export default function Navbar({ scene, previous }) {
  const { options, navigation } = scene.descriptor;
  const title = options.title || scene.route.name;

  return (
    <Box background='foreground'>
      <SafeAreaView>
        <Box pad="large" direction="row" align="center">
          <Box flex>
            { navigation && navigation.openDrawer && <HeaderMenuButton navigation={navigation} /> }
            { previous && <HeaderBackButton navigation={navigation} /> }
          </Box>
          <Box flex>
            <Heading size="small" textAlign='center'>
              {title}
            </Heading>
          </Box>
          <Box flex />
        </Box>
      </SafeAreaView>
    </Box>
  );
}
