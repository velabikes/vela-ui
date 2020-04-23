import React from "react";
import { SafeAreaView } from "react-native";
import DrawerItem from "./DrawerItem";
import Box from "../Box";

function DrawerContent({ navigation, state, descriptors, drawerHeader }) {
  const DrawerHeader = drawerHeader
  return (
    <Box flex background='foreground'>
      <SafeAreaView>
        <DrawerHeader />
        <Box pad={{horizontal: "xlarge", vertical: "large"}}>
          {state.routes.map(route => {
            const { drawerLabel, drawerIcon } = descriptors[route.key].options;
            return (
              <DrawerItem
                icon={drawerIcon}
                label={drawerLabel}
                routeName={route.name}
                navigation={navigation}
              />
            );
          })}
        </Box>
      </SafeAreaView>
    </Box>
  );
}

export default DrawerContent;
