import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {useTheme} from '../lib/theme'

export const Pin = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 97.14 128.36" style={[defaultStyle, style]} {...props}>
      <Path
        d="M97.14 53.86a81.58 81.58 0 0 0-1.27-14.42C91.16 13.12 69.82 0 48.5 0h.07a51.62 51.62 0 0 0-11.94 1.4c-16.8 4-31.54 16.7-35.36 38A82.54 82.54 0 0 0 0 53.86a81.42 81.42 0 0 0 48.57 74.5 81.4 81.4 0 0 0 48.57-74.5z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Parking = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="6 6 16 16" style={[defaultStyle, style]} {...props}>
      <Path
        d="M11.184 6.382c1.86 0 3.288.33 4.284.99.996.648 1.494 1.716 1.494 3.204 0 1.5-.504 2.586-1.512 3.258-1.008.66-2.448.99-4.32.99h-.882V19H7.44V6.706c.612-.12 1.26-.204 1.944-.252a26.102 26.102 0 011.8-.072zm.18 2.394c-.204 0-.408.006-.612.018-.192.012-.36.024-.504.036v3.6h.882c.972 0 1.704-.132 2.196-.396.492-.264.738-.756.738-1.476 0-.348-.066-.636-.198-.864-.12-.228-.3-.408-.54-.54a2.134 2.134 0 00-.846-.288 6.37 6.37 0 00-1.116-.09z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Location = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 1024 1024" style={[defaultStyle, style]} {...props}>
      <Path
        d="M910.068046 199.460571l-365.714286 731.428571q-9.728 19.968-32.548571 19.968-2.852571 0-8.557714-1.170286-12.580571-2.852571-20.260571-12.873143t-7.68-22.601143l0-329.142857-329.142857 0q-12.580571 0-22.601143-7.68t-12.873143-20.260571 2.267429-23.990857 16.603429-17.115429l731.428571-365.714286q7.460571-4.022857 16.603429-4.022857 15.433143 0 25.746286 10.825143 8.557714 7.972571 10.605714 19.748571t-3.730286 22.601143z"
        fill={'transparent'}
        stroke={(style && style.color) || colors.text}
        strokeWidth={96}
      />
    </Svg>
  )
}

export const Bolt = ({style, color, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 398.528 398.528" style={[defaultStyle, style]} {...props}>
      <Path
        d="M315.232 9.015C311.883 3.276 305.681 0 298.244 0h-91.308c-10.9 0-22.224 7.113-26.93 16.924L83.17 218.041c-3.162 6.56-2.967 13.518.471 19.037 3.463 5.568 9.592 8.811 16.859 8.966l71.662.902-51.877 129.675c-1.276 3.235-3.959 10.014.821 16.981 2.089 3.056 5.674 4.926 9.364 4.926h.837c6.999 0 11.217-5.308 13.241-7.868l167.628-210.49c7.153-8.966 4.202-17.013 3.121-19.354-1.122-2.243-5.625-9.592-17.046-9.592h-53.34l69.8-122.985c3.659-6.487 3.862-13.51.521-19.224z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Logo = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 149.77 184.66" style={[defaultStyle, style]} {...props}>
      <Path
        fill={(style && style.color) || colors.text}
        d="M130.66 111.65c-17.33 27.27-52 53.6-86.63 70.16-16.34 7.81-37.45-.53-38.92-23.87-.9-14.33 10.89-72.16 11.36-76.69.9-8.37-5.64-10.92-14.48-2.69l-2-3s39.59-38.14 43.28-41.84 18.94-17.23 25 2.09-4.55 60.24-6.62 70.12c-2.24 10.75-12.49 53.43 0 53.43 17.61 0 32.41-48.73 34.66-57.65 2.47-9.88 13-77.89-8.3-56.56l-2-2.88s31.59-30.61 39.54-35.72S144-7.37 148.28 11.66s-.29 72.71-17.62 100"
      />
    </Svg>
  )
}

export const Wrench = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
      <Path
        fill={(style && style.color) || colors.text}
        d="M4.5.257l3.771 3.771c.409 1.889-2.33 4.66-4.242 4.242L.258 4.5A6.345 6.345 0 000 6.292a6.268 6.268 0 006.761 6.247 3.209 3.209 0 012.514.931l9.662 9.662a2.966 2.966 0 004.195-4.195L13.47 9.274a3.21 3.21 0 01-.931-2.514 6.27 6.27 0 00-1.82-4.93A6.236 6.236 0 006.291 0C5.688 0 5.084.086 4.5.257zM22 21a1 1 0 11-1.998.002A1 1 0 0122 21z"
      />
    </Svg>
  )
}

export const Phone = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 -256 1792 1792" style={[defaultStyle, style]} {...props}>
      <Path
        d="M1567.458 997.017q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5q-32-9-47.5-14.5t-55.5-20.5q-40-15-49-18-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5q-5.5-15.5-14.5-47.5t-12.5-57.5q-3.5-25.5-3.5-52.5 0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5q16 28.5 31 53.5 3 4 17.5 25t21.5 35.5q7 14.5 7 28.5 0 20-28.5 50t-62 55q-33.5 25-62 53t-28.5 46q0 9 5 22.5t8.5 20.5q3.5 7 14 24t11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14q7 3.5 20.5 8.5t22.5 5q18 0 46-28.5t53-62q25-33.5 55-62t50-28.5q14 0 28.5 7t35.5 21.5q21 14.5 25 17.5 25 15 53.5 31t63.5 35q35 19 54 30 70 35 76 53 3 7 3 21z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Dropdown = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 240.811 240.811" style={[defaultStyle, style]} {...props}>
      <Path
        d="M220.088 57.667l-99.671 99.695-99.671-99.707a12.147 12.147 0 00-17.191 0c-4.74 4.752-4.74 12.451 0 17.203l108.261 108.297c4.74 4.752 12.439 4.752 17.179 0L237.256 74.859c4.74-4.752 4.74-12.463 0-17.215-4.728-4.729-12.428-4.729-17.168.023z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Back = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 16 16" style={[defaultStyle, style]} {...props}>
      <Path
        d="M14.583 6.593H3.413l4.88-4.88a1.008 1.008 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-6.59 6.59a1 1 0 0 0 0 1.41l6.59 6.59a1 1 0 1 0 1.41-1.41l-4.88-4.88h11.17a1 1 0 0 0 0-2z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

export const Menu = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 28.44 20.07" style={[defaultStyle, style]} {...props}>
      <Path
        fill={(style && style.color) || colors.text}
        d="M27.58 2.2H.86A1.13 1.13 0 0 1 0 .82 1.12 1.12 0 0 1 .86 0h26.72a1.13 1.13 0 0 1 .82 1.38 1.12 1.12 0 0 1-.82.82z"
      />
      <Path
        fill={(style && style.color) || colors.text}
        d="M27.58 11.14H.86A1.13 1.13 0 0 1 0 9.76a1.1 1.1 0 0 1 .82-.82h26.76a1.14 1.14 0 0 1 0 2.2z"
      />
      <Path
        fill={(style && style.color) || colors.text}
        d="M27.58 20.07H.86A1.12 1.12 0 0 1 0 18.7a1.1 1.1 0 0 1 .82-.82h26.76a1.12 1.12 0 0 1 .82 1.37 1.1 1.1 0 0 1-.82.82z"
      />
    </Svg>
  )
}

export const Cart = ({style, ...props}) => {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 26.01 26" style={[defaultStyle, style]} {...props}>
      <Path
        d="M7.8 20.8a2.6 2.6 0 1 0 2.6 2.6 2.6 2.6 0 0 0-2.6-2.6zM0 1.3a1.31 1.31 0 0 0 1.3 1.3h1.3l4.68 9.87-1.75 3.17A2.6 2.6 0 0 0 7.8 19.5h14.3a1.3 1.3 0 0 0 0-2.6H7.8l1.43-2.6h9.69a2.58 2.58 0 0 0 2.27-1.3l4.65-8.44a1.29 1.29 0 0 0-1.13-1.96H5.47L4.6.74A1.29 1.29 0 0 0 3.43 0H1.3A1.31 1.31 0 0 0 0 1.3zm20.8 19.5a2.6 2.6 0 1 0 2.6 2.6 2.6 2.6 0 0 0-2.6-2.6z"
        fill={(style && style.color) || colors.text}
      />
    </Svg>
  )
}

const defaultStyle = {
  height: 16,
  width: 16
}

export default {
  Cart,
  Menu,
  Back,
  Dropdown,
  Phone,
  Wrench,
  Logo,
  Bolt,
  Location,
  Pin,
  Parking
}