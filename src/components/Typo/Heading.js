import React from "react";
import Text from "../Text";
import { useTheme } from "../../lib/theme";

function Heading({ children, size, ...props }) {
  const {
    typo: { heading },
  } = useTheme();

  return (
    <Text
      size={heading.size[size] || size || heading.size.medium}
      weight={"700"}
      {...props}
    >
      {children}
    </Text>
  );
}

export default Heading;
