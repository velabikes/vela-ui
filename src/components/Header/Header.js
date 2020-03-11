import React from 'react'
import {SafeAreaView, View} from 'react-native'
import Box from "../Box"
import HeaderMenuButton from "./HeaderMenuButton"
import Text from "../Text"

const boxStyle = {
  flexDirection: 'row',
  justifyContent: 'space-evenly'
}

export default function Header() {
  return (
    <Box>
      <SafeAreaView style={boxStyle}>
        <HeaderMenuButton />
        <Text>Title</Text>
        <View />
      </SafeAreaView>
    </Box>
  )
}