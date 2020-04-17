import React, { useState } from "react";
import { View, Switch as RNSwitch, StyleSheet } from "react-native";
import * as t from 'prop-types'

const Switch = ({toggleSwitch}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <RNSwitch
        trackColor={{ false: "#EFEFEF", true: "#3D9771" }}
        thumbColor={isEnabled ? "#FFFFFF" : "#D6D4D4"}
        onValueChange={() => {
          toggleSwitch()
          setIsEnabled(!isEnabled)
        }}
        value={isEnabled}
      />
    </View>
  );
}

Switch.propTypes = {
  toggleSwitch: t.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 16,
  }
});

export default Switch
