import React from "react";
import { SafeAreaView } from "react-native";
import DrawerItem from "./DrawerItem";
import Box from "./Primitives/Box";
import Backdrop from "./Backdrop";

function DrawerContent({ navigation, state, descriptors }) {
  return (
    <Backdrop style={{ flex: 1 }}>
      <SafeAreaView>
        <Box>
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
    </Backdrop>
  );
}

export default DrawerContent;
