import React from 'react'
import {Icons, Box, Heading, Paragraph, Gap} from '@vela/ui'
import {View, ScrollView} from 'react-native'

function IconDisplay({iconName}) {
  const Icon = Icons[iconName]
  return (
    <Box>
      <Heading size="small">{`<Icons.${iconName} />`}</Heading>
      <Gap size="small" />
      <Box direction="row" align="center">
        <Icon width="96" height="96" />
        <Icon width="64" height="64" />
        <Icon width="48" height="48" />
        <Icon width="32" height="32" />
        <Icon />
        <Icon width="16" height="16" />
      </Box>
      <Gap />
    </Box>
  )
}

export default function IconsScreen() {
  return (
    <Box>
      <ScrollView>
        <Box>
          <Heading>Usage</Heading>
          <Gap size="small" />
          <Paragraph>Describe</Paragraph>
          <Gap />

          <Heading>Base</Heading>
          <Gap />
          <IconDisplay iconName="Add" />
          <IconDisplay iconName="Delete" />
          <IconDisplay iconName="Check" />
          <Gap />

          <Heading>Interface</Heading>
          <Gap />
          <IconDisplay iconName="Menu" />
          <Gap />

          <Heading>Weather</Heading>
          <Gap />
          <IconDisplay iconName="Sun" />
          <IconDisplay iconName="Cloud" />
          <IconDisplay iconName="Rain" />
          <Gap />


          <Heading>Branding</Heading>
          <Gap />
          <IconDisplay iconName="Logo" />
          <Gap />

          <Heading>Notifications</Heading>
          <Gap />
          <IconDisplay iconName="Alert" />
          <Gap />
        </Box>
      </ScrollView>
    </Box>
  )
}
