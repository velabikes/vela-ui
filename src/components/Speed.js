import React, { useState, useEffect } from "react";
import Text from "./Text";
import Heading from "./Typography/Heading";
import Paragraph from "./Typography/Paragraph";
import convert from "convert-units";
import { useSystem } from "../lib/useSystem";

function Speed({ speed, size, ...props }) {
  const system = useSystem();
  const unit = system === "metric" ? "km/h" : "m/h";
  const displayUnit = unit === "m/h" ? "mi/h" : unit;

  const speedStyle = {
    lineHeight: 56,
  };

  const [instantSpeed, setInstantSpeed] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (instantSpeed > speed) setInstantSpeed(instantSpeed - 1);
      if (instantSpeed < speed) setInstantSpeed(instantSpeed + 1);
    }, 100);
    return () => clearInterval(interval);
  });

  const value = convert(instantSpeed)
    .from("km/h")
    .to(unit);

  return (
    <>
      <Heading size={size} style={speedStyle} {...props}>
        {value.toFixed(0)}
      </Heading>
      <Paragraph>{displayUnit}</Paragraph>
    </>
  );
}

export default Speed;
