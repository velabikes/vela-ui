import React from 'react'
import {View} from 'react-native'
import {Subheading, Heading,  LiveSpline, useTheme} from '@vela/ui'
import Speed from '../Speed'

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

export default function Speedometer({speed = 0}) {

  const textStyle = {
    textAlign: 'center'
  }

  return (
    <>
    <View style={containerStyle}>
      {/* <View style={viewStyle}><LiveSpline current={speed} interval={1000} /></View> */}
      <Speed
        valueComponent={Heading}
        unitComponent={Subheading}
        speed={speed}
      />
    </View>
    </>
  );
}
