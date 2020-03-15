import React, {useSTate, useState, useEffect} from "react"
import { View } from "react-native"
import {Speedometer} from "@vela/ui"

export default function Charts() {
  const [speedHistory, setSpeedHistory] = useState([])
  const addSpeed = value => setSpeedHistory(history => [...history, value])
  useEffect(() => {
    setInterval(() => {
      addSpeed(Math.floor(Math.random() * 10))
    }, 1000)
  }, [])
  return (
    <View>
        <Speedometer speedHistory={speedHistory} />
    </View>
  )
}