import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import {Subheading, Card, Heading} from '@vela/ui'
import Svg, {Path, Circle} from 'react-native-svg'

const containerStyle = {
  width: 100,
  height: 100,
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center'
}
const textStyle = {
  textAlign: 'center'
}

export default function Speedometer({speed = 0}) {
  return (
    <Card style={containerStyle}>
      <Heading style={textStyle}>{speed}</Heading>
      <Subheading style={textStyle}>km/h</Subheading>
    </Card>
  );
}
