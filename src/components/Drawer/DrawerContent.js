import React from "react";
import { SafeAreaView } from "react-native";
import DrawerItem from "./DrawerItem";
import Box from "../Box";
import Text from "../Text";

function DrawerContent({ navigation, state, descriptors, drawerHeader, ...props }) {
  const DrawerHeader = drawerHeader

  return (
    <Box flex background='foreground'>
      <SafeAreaView>
        <DrawerHeader />
        <Box>
          {state.routes.map((route, i) => {
            const { drawerLabel, drawerIcon } = descriptors[route.key].options;
            const focused = i === state.index
            return (
              <DrawerItem
                icon={drawerIcon}
                label={drawerLabel}
                routeName={route.name}
                navigation={navigation}
                key={route.name}
                focused={focused}
              />
            );
          })}
        </Box>
      </SafeAreaView>
    </Box>
  );
}

export default DrawerContent;
