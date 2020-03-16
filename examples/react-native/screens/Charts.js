import React, {useState, useEffect} from 'react'
import {Screen, Box, Speedometer} from '@vela/ui'

export default function Charts() {
  const [speed, setSpeed] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setSpeed(Math.floor(Math.random() * 10))
    }, 1000)
  }, [])

  return (
    <Screen>
      <Box>
        <Speedometer speed={speed} />
      </Box>
    </Screen>
  )
}
