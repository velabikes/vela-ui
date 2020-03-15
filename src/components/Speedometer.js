import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import {Text, Box} from '@vela/ui'
import Svg, {Path, Circle} from 'react-native-svg'

const lineCommand = point => `L ${point[0]} ${point[1]}`
const data2d = points => 
  points.reduce((acc, point, i, a) => i === 0
    ? `M 0,${point}`
    : `${acc} L ${i*10}, ${point}`
  , '')

export default function Speedometer({speedHistory}) {
  return (
    <Box>
      <Text>{JSON.stringify(speedHistory)}</Text>
      <Svg viewBox="0 0 100 100" style={{height: 300, width: 300}}>
        <Circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        <Path d={data2d(speedHistory)} stroke="black" fill="none" stroke-width="3" />
      </Svg>
    </Box>
  );
}
