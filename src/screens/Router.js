//import liraries
import React from "react";
import { Image, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { IMAGE } from "../common/Utils/image";
import { FONTS } from "../common/Utils/fonts";
import Splash from "./AuthStack/Splash";
import Home from "./AppStack/Home";
import Setting from "./AppStack/Setting";

// create a component
const Router = () => {
  const Stack = createNativeStackNavigator();

  const Bottom = () => {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: FONTS.Bold,
            paddingBottom: Platform.OS == "android" ? RFValue(5) : RFValue(0),
          },
          tabBarStyle: {
            height: Platform.OS == "android" ? RFValue(50) : RFValue(75),
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={IMAGE.Home}
                  style={{
                    height: RFValue(26),
                    width: RFValue(26),
                  }}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={IMAGE.Importantnotices}
                  style={{
                    height: RFValue(26),
                    width: RFValue(26),
                  }}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Dashboard" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Router;
