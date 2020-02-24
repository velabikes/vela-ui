import React from "react"
import DrawerItem from "./DrawerItem"
import Box from "./Box"

function DrawerContent({ navigation, state, descriptors }) {
  return (
    <Box style={{ flex: 1}}>
      {state.routes.map(route => {
        const { drawerLabel, drawerIcon } = descriptors[route.key].options
        return (
          <DrawerItem
            icon={drawerIcon}
            label={drawerLabel}
            routeName={route.name}
            navigation={navigation}
          />
        )
      })}
    </Box>
  )
}

export default DrawerContent
