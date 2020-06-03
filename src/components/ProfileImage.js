import React from 'react'
import {Image} from 'react-native'

function ProfileImage({style, width, height, ...props}) {
  const baseContainerStyle = {
    height: width,
    width: height,
    borderRadius: height,
    marginRight: 'auto',
    marginLeft: 'auto'
  }
  return (
    <Image style={[baseContainerStyle, style]} {...props} />
  )
}

export default ProfileImage
