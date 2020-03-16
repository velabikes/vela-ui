import React from 'react'
import {Icons, Box, Heading, Paragraph, Spacer, Screen} from '@vela/ui'
import {View, ScrollView} from 'react-native'

function IconDisplay({iconName}) {
  const Icon = Icons[iconName]
  return (
    <View>
      <Heading size="s">{`<Icons.${iconName} />`}</Heading>
      <Spacer size="s" />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon width="96" height="96" />
        <Icon width="64" height="64" />
        <Icon width="48" height="48" />
        <Icon width="32" height="32" />
        <Icon />
        <Icon width="16" height="16" />
      </View>
      <Spacer />
    </View>
  )
}

export default function IconsScreen() {
  return (
    <Screen>
      <ScrollView>
        <Box>
          <Heading>Usage</Heading>
          <Spacer size="s" />
          <Paragraph>Describe</Paragraph>
          <Spacer />

          <Heading>Base</Heading>
          <Spacer />
          <IconDisplay iconName="Add" />
          <IconDisplay iconName="Delete" />
          <IconDisplay iconName="Check" />
          <Spacer />

          <Heading>Interface</Heading>
          <Spacer />
          <IconDisplay iconName="Menu" />
          <Spacer />

          <Heading>Weather</Heading>
          <Spacer />
          <IconDisplay iconName="Sun" />
          <IconDisplay iconName="Cloud" />
          <IconDisplay iconName="Rain" />
          <Spacer />


          <Heading>Branding</Heading>
          <Spacer />
          <IconDisplay iconName="Logo" />
          <Spacer />
        </Box>
      </ScrollView>
    </Screen>
  )
}
