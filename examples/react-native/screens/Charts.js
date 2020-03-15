import React, {useSTate, useState, useEffect} from "react"
import { View } from "react-native"
import {Box, Speedometer} from "@vela/ui"

export default function Charts() {
  const [speed, setSpeed] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setSpeed(Math.floor(Math.random() * 10))
    }, 1000)
  }, [])
  return (
    <Box>
        <Speedometer speed={speed} />
    </Box>
  )
}