import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenNames } from "./screenNames";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "views/landingPage";
import Signup from "views/signUp";
import Login from "views/signIn";
import Profile from "views/profile";
import HomePage from "views/jobListing";

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
      <Stack.Screen
        name={screenNames.HOME}
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
