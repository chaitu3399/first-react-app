import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SvgImage from "../components/SvgImage";
import Button from "../components/Button";
import { screenNames } from "../navigation/screenNames";

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SvgImage style={styles.image} />
      <Text style={styles.text}>
        XXXXXX lets you lorem ipsum dolor set amet. Lorem ipsum dolor set amet.
      </Text>
      <View style={styles.btn}>
        <Button
          label="Sign Up"
          customStyle={styles.sign}
          onPress={() => navigation.navigate(screenNames.SIGNUP)}
        />
        <Button
          label="Sign in"
          customStyle={styles.sign}
          onPress={() => navigation.navigate(screenNames.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    width: 269.96,
    height: 203.75,
    margin: "auto",
    marginTop: 150,
  },
  text: {
    fontSize: 18,
    lineHeight: 21.09,
    width: 305,
    fontWeight: "400",
    margin: "auto",
    marginTop: 50,
  },
  btn: {
    flexDirection: "row",
    columnGap: 5,
    margin: "auto",
    marginTop: 70,
  },
});
