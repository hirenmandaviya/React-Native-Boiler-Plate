//import liraries
import React from "react";
import { Image, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IMAGE } from "../common/Utils/image";
import { FONTS } from "../common/Utils/fonts";
import Splash from "./AuthStack/Splash";
import Home from "./AppStack/Home";
import { SCREENS } from "../common/Utils/Screens";
import { scaleSize } from "../common/Utils/constant";
import { COLORS } from "../common/Utils/Colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerComponent from "../common/Components/CustomDrawerComponent";
import Welcome from "./AuthStack/Welcome";
import Message from "./AppStack/Message";
import Connect from "./AppStack/Connect";
import Trade from "./AppStack/Trade";
import More from "./AppStack/More";

// create a component
const Router = () => {
  const Stack = createNativeStackNavigator();

  /**
   * Creates a custom drawer navigator component.
   *
   * @return {React.Component} The custom drawer navigator component.
   */
  const CustomDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerComponent {...props} />}
        initialRouteName={SCREENS.Dashboard}
        screenOptions={{
          headerShown: false,
          drawerType: "front",
          drawerStyle: {
            width: "80%",
            borderTopRightRadius: scaleSize(20),
            borderBottomRightRadius: scaleSize(20),
          },
        }}
      >
        <Drawer.Screen name={SCREENS.HomeTab} component={Bottom} />
      </Drawer.Navigator>
    );
  };

  /**
   * Renders a bottom tab navigator with four screens: Home, Messages, Connect, and Trade.
   *
   * @return {JSX.Element} The bottom tab navigator component.
   */
  const Bottom = () => {
    // const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    const iconStyle = (focus) => {
      return {
        height: scaleSize(20),
        width: scaleSize(20),
        tintColor: focus ? COLORS.Primary : COLORS.Outline,
      };
    };
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            paddingBottom: scaleSize(5),
            fontSize: scaleSize(12),
            fontFamily: FONTS.RBold,
          },
          tabBarInactiveTintColor: COLORS.Outline,
          tabBarActiveTintColor: COLORS.Primary,
          tabBarStyle: {
            backgroundColor: COLORS.OffWhite,
            height: Platform.OS === "ios" ? scaleSize(95) : scaleSize(60),
          },
        }}
        initialRouteName={SCREENS.Home}
      >
        <Tab.Screen
          name={SCREENS.Home}
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={IMAGE.Home}
                  style={iconStyle(focused)}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREENS.Messages}
          component={Message}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={IMAGE.Messages}
                  style={iconStyle(focused)}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREENS.Connect}
          component={Connect}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    backgroundColor: focused ? COLORS.Primary : COLORS.Outline,
                    height: scaleSize(62),
                    width: scaleSize(62),
                    borderRadius: scaleSize(600),
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: scaleSize(5),
                    borderColor: COLORS.OffWhite,
                    // marginBottom: scaleSize(8),
                    position: "absolute",
                    bottom: scaleSize(0),
                  }}
                >
                  <Image
                    source={IMAGE.LogoRaw}
                    style={{
                      tintColor: COLORS.White,
                      height: scaleSize(34),
                      width: scaleSize(34),
                    }}
                    resizeMode="contain"
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREENS.Trade}
          component={Trade}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={IMAGE.Trade}
                  style={iconStyle(focused)}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREENS.More}
          component={More}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={IMAGE.More}
                  style={iconStyle(focused)}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  // Navigation Container for stack
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.Splash}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREENS.Splash} component={Splash} />
        <Stack.Screen name={SCREENS.Welcome} component={Welcome} />
        <Stack.Screen name={SCREENS.Dashboard} component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Router;
