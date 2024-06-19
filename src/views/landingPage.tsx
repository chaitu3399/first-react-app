import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SvgImage from "./components/svgImage";
import Button from "./components/button";
import { screenNames } from "../navigation/screenNames";

const LandingPage = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <SvgImage props={null} />
      </View>
      <Text style={styles.text}>
        XXXXXX lets you lorem ipsum dolor set amet. Lorem ipsum dolor set amet.
      </Text>
      <View style={styles.btn}>
        <Button
          label="Sign Up"
          customStyle={null}
          onPress={() => navigation.navigate(screenNames.SIGNUP)}
        />
        <Button
          label="Sign In"
          customStyle={null}
          onPress={() => navigation.navigate(screenNames.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 269.96,
    height: 203.75,
    alignSelf: "center",
    marginTop: 150,
  },
  text: {
    fontSize: 18,
    lineHeight: 21.09,
    width: 305,
    fontWeight: "400",
    marginTop: 80,
    alignSelf: "center",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end",
    marginTop: 60,
  },
});
