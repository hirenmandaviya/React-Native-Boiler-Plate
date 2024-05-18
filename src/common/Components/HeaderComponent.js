//import liraries
import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaleSize } from "../Utils/constant";
import { IMAGE } from "../Utils/image";
import { useNavigation } from "@react-navigation/native";

// create a component
const HeaderComponent = ({
  label,
  labelStyle,
  backPress,
  icon = IMAGE.LeftArrow,
}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backPress || goBack} activeOpacity={0.7}>
        <Image source={icon} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={[styles.loginButton, labelStyle]}>{label}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scaleSize(20),
    paddingVertical: scaleSize(18),
    backgroundColor: COLORS.GreyBackground,
  },
  loginButtonContainer: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: scaleSize(22),
    // borderRadius: scaleSize(100),
  },
  loginButton: {
    color: COLORS.Black,
    fontFamily: FONTS.RRegular,
    fontSize: scaleSize(22),
  },
  image: {
    height: scaleSize(18),
    width: scaleSize(18),
    marginRight: scaleSize(20),
  },
});

//make this component available to the app
export default HeaderComponent;
