//import liraries
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "../fonts";

// create a component
const CommonButton = ({ label, buttonStyle, labelStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.loginButtonContainer, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.loginButton, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  loginButtonContainer: {
    backgroundColor: COLORS.Theme,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFPercentage(2),
    paddingHorizontal: RFPercentage(6),
    borderRadius: RFValue(6),
  },
  loginButton: {
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
    fontSize: RFValue(14),
  },
});

//make this component available to the app
export default CommonButton;
