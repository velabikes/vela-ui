import React from 'react'
import {View} from 'react-native'

import Speed from '../Speed'

const containerStyle = {
  width: 96,
  height: 96,
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: 'transparent'
}

const viewStyle = {
  position: 'absolute',
  left: -5
}

export default function Speedometer({speed = 0, size}) {

  const textStyle = {
    textAlign: 'center'
  }

  return (
    <>
    <View style={containerStyle}>
      {/* <View style={viewStyle}><LiveSpline current={speed} interval={1000} /></View> */}
      <Speed
        speed={speed}
        size={size}
      />
    </View>
    </>
  );
}
