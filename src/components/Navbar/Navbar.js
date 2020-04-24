import React from "react";
import { SafeAreaView } from "react-native";
import Box from "../Box";
import HeaderMenuButton from "./NavbarMenuButton";
import HeaderBackButton from "./NavbarBackButton";
import Heading from "../Typo/Heading";

export default function Navbar({ scene, previous }) {
  const { options, navigation } = scene.descriptor
  const title = options.title || scene.route.name
  const { onBack } = options

  return (
    <Box background='foreground'>
      <SafeAreaView>
        <Box pad="large" direction="row" align="center">
          <Box flex>
            { navigation && navigation.openDrawer && <HeaderMenuButton navigation={navigation} /> }
            { previous && !onBack && <HeaderBackButton navigation={navigation} /> }
            { onBack && <HeaderBackButton onPress={onBack} /> }
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
