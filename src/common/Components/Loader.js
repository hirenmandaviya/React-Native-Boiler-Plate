import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "./../Utils/Colors";

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={COLORS.White} />
  </View>
);

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
});
