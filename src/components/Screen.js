import React from "react"
import Backdrop from "./Backdrop";

const backdropStyle = {
  flex: 1
};

export default function Screen({children, style, ...props}) {
  return <Backdrop style={[backdropStyle, style]} {...props}>{children}</Backdrop>;
}
