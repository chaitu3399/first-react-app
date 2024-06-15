import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenNames } from "./screenNames";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "../Screens/LandingPage";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name={screenNames.LANDINGPAGE}
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screenNames.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screenNames.SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screenNames.PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
