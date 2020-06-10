import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import {Subheading, Card, Heading,  LiveSpline, useTheme} from '@vela/ui'
import Svg, {Path, Circle} from 'react-native-svg'

const containerStyle = {
  width: 100,
  height: 100,
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: 'rgba(128,128,128,0.3)'
}

const viewStyle = {
  position: 'absolute',
  left: -5
}

export default function Speedometer({speed = 0, speedMeasure}) {
  const colors = useTheme()

  const textStyle = {
    textAlign: 'center',
    color: speed > 80 ? colors.alert : colors.text
  }

  return (
    <>
    <View style={containerStyle}>
      {/* <View style={viewStyle}><LiveSpline current={speed} interval={1000} /></View> */}
      <Heading style={textStyle}>{speed}</Heading>
      <Subheading style={textStyle}>{speedMeasure}</Subheading>
    </View>
    </>
  );
}
