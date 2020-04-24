import React from 'react'
import {Image} from 'react-native'

function ProfileImage({style, ...props}) {
  const baseContainerStyle = {
    height: 96,
    width: 96,
    borderRadius: 64,
    marginRight: 'auto',
    marginLeft: 'auto'
  }
  return (
    <Image style={[baseContainerStyle, style]} {...props} />
  )
}

export default ProfileImage
