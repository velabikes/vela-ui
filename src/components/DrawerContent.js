import React from "react";
import {SafeAreaView} from 'react-native'
import DrawerItem from "./DrawerItem";
import Box from "./Box";
import Surface from "./Surface";

function DrawerContent({ navigation, state, descriptors }) {
  return (
    <Surface style={{ flex: 1 }}>
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
    </Surface>
  );
}

export default DrawerContent;
