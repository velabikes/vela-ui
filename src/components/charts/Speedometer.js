import React from "react";
import { View } from "react-native";

import Speed from "../Speed";

const containerStyle = {
  justifyContent: "space-between",
  alignItems: "center",
  height: 96,
};

export default function Speedometer({ speed = 0, size }) {
  return (
    <>
      <View style={containerStyle}>
        {/* <View style={viewStyle}><LiveSpline current={speed} interval={1000} /></View> */}
        <Speed speed={speed} size={size} />
      </View>
    </>
  );
}
