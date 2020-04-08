import * as React from "react";
import { Button, Image } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./pages/HomeScreen";
import SettingsScreen from "./pages/SettingsScreen";
import DetailsScreen from "./pages/DetailsScreen";
import ProfileScreen from "./pages/ProfileScreen";
import VideoScreen from "./pages/VideoScreen";

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00bfff",
      },
      headerTintColor: "#FFFFFF",
      title: "Home",
      //Header title
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
    Video: { screen: VideoScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: "#00bfff",
      },
      headerTintColor: "#FFFFFF",
      title: "Settings",
      //Header title
    },
  }
);

const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return (
            <Image
              source={
                focused
                  ? require("./asset/logo1.png")
                  : require("./asset/logo2.png")
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        } else if (routeName === "Settings") {
          return (
            <Image
              source={
                focused
                  ? require("./asset/logo1.png")
                  : require("./asset/logo4.png")
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: "#42f44b",
      inactiveTintColor: "gray",
    },
  }
);
export default createAppContainer(App);
