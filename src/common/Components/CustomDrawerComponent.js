import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS } from "../Utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "../Utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { IMAGE } from "../Utils/image";

const CustomDrawerComponent = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <View style={styles.topComponent}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.role}>Admin</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  subContainer: {
    // flex: 1,
    paddingHorizontal: RFValue(14),
  },
  avatar: {
    height: RFValue(45),
    width: RFValue(45),
    borderRadius: RFValue(100),
    borderWidth: 1,
    borderColor: COLORS.GreyBorder,
  },
  topComponent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: RFValue(18),
  },
  nameContainer: {
    marginLeft: RFValue(8),
    flex: 1,
  },
  name: {
    fontFamily: FONTS.SemiBold,
    fontSize: RFValue(16),
    color: COLORS.Black,
  },
  role: {
    fontFamily: FONTS.Medium,
    fontSize: RFValue(10),
    color: COLORS.DrawerGrey,
  },
  drawerItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: RFValue(12),
    borderRadius: RFValue(8),
    marginVertical: RFValue(2),
  },
  icon: {
    height: RFValue(20),
    width: RFValue(20),
  },
  title: {
    fontFamily: FONTS.SemiBold,
    fontSize: RFValue(16),
    color: COLORS.Black,
  },
  badge: {
    fontFamily: FONTS.Medium,
    fontSize: RFValue(12),
    color: COLORS.StaticBlack,
  },
  badgeContainer: {
    borderRadius: RFValue(4),
    height: RFValue(20),
    width: RFValue(20),
    alignItems: "center",
    justifyContent: "center",
  },
});
