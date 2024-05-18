//import liraries
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { scaleSize } from "../../common/Utils/constant";
import { FONTS } from "../../common/Utils/fonts";
import { COLORS } from "../../common/Utils/Colors";
import { SCREENS } from "../../common/Utils/Screens";
import { useNavigation } from "@react-navigation/native";
/**
 * Welcome screen component.
 * This component is displayed first when the app is launched.
 * It displays the text "Welcome" in the center of the screen.
 */
const Welcome = () => {
  const navigation = useNavigation();

  // Navigates to the Dashboard screen.
  const navigateToDashboard = () => {
    navigation.navigate(SCREENS.Dashboard);
  };

  return (
    <View style={styles.container}>
      <Text onPress={navigateToDashboard} style={styles.text}>
        Welcome
      </Text>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.White,
  },
  text: {
    fontSize: scaleSize(20),
    fontFamily: FONTS.RMedium,
  },
});

//make this component available to the app
export default Welcome;
