import React, { useState, useEffect, useCallback } from 'react'
import useInterval from '../../lib/useInterval'
import { Svg, Polyline } from "react-native-svg"
import {Text} from 'react-native'

export default function LiveSpline({
    current,
    interval,
    resolution = 100
  }) {
  const [data, setData] = useState(new Array(resolution).fill(current))

  const updateCurrentdata = useCallback(() => {
    setData([...data, current].slice(-resolution))
    console.log([...data, current].slice(-resolution))
  }, [current, data])

  const data2points = data => data.reduce((a,b,i) => (i === 1 ? `0,100 ` : a) + `${i},${80-b} `) + ' 100, 100'

  useInterval(updateCurrentdata, interval)
  
  return (
    <Svg viewBox={`0 0 ${resolution} 100`} width={110} height={110}>
      <Polyline
        fill="blue"
        stroke="red"
        strokeWidth="0"
        points={data2points(data)}
      />
    </Svg>
  )
}
