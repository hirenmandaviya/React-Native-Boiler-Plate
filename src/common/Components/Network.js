import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
} from "react-native";
import { FONTS } from "./../Utils/fonts";
import { COLORS } from "./../Utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import NetInfo from "@react-native-community/netinfo";

const Network = () => {
  const [isConnected, setIsConnected] = useState(true);
  const heightAnimatedValue = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((value) => {
      console.log("Is connected?", value.isConnected);
      setIsConnected(value.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View>
      <SafeAreaView />
      <StatusBar />
      {!isConnected ? (
        <Animated.View
          style={[styles?.mainView, { height: heightAnimatedValue }]}
        >
          <Text style={styles?.internetText}>No internet connection</Text>
        </Animated.View>
      ) : (
        <View />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  internetText: {
    textAlign: "center",
    color: COLORS.White,
    fontSize: RFValue(12),
    fontFamily: FONTS.SemiBold,
  },
  mainView: {
    backgroundColor: COLORS.Red,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Network;
