//import liraries
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../common/Utils/Colors";
import { FONTS } from "../../common/Utils/fonts";
import { useNavigation } from "@react-navigation/native";

// create a component
const Splash = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes : [{name : "Dashboard"}]
            })
        }, 1000);
    }, [])
    

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Splash
      </Text>
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
    fontFamily: FONTS.Bold,
    color: COLORS.Black,
  },
});

//make this component available to the app
export default Splash;
