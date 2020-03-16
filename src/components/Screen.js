import React from "react"
import Backdrop from "./Backdrop";

const BackdropStyle = {
  flex: 1
};

export default function Screen({children}) {
  return <Backdrop style={BackdropStyle}>{children}</Backdrop>;
}
