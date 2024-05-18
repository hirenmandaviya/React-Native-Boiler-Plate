//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../common/Utils/Colors";
import { FONTS } from "../../common/Utils/fonts";

// create a component
const Connect = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Connect</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.White,
  },
  text: {
    fontFamily: FONTS.RBold,
    color: COLORS.Black,
  },
});

//make this component available to the app
export default Connect;
