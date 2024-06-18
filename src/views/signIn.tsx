import { StyleSheet, Text, View, Image, Alert} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "./components/input";
import Button from "./components/button";
import { screenNames } from "../navigation/screenNames";


const Login = ({ navigation }: {navigation: any}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors: Array<String> = [];

    //Email Validation
    if (!email) {
      errors.push("Email is required.");
    } else if (!emailRegex.test(email)) {
      errors.push("Email is Invalid.");
    }

    //Password validation
    if (!password) {
      errors.push("Password is required.");
    }

    if (errors.length != 0) {
      Alert.alert(errors.join("\n"));
    } else {
      navigation.navigate(screenNames.HOME);
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate(screenNames.LANDINGPAGE)}
      >
        <Image
          source={require("../assets/left-arrow.png")}
          style={styles.backIcon}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.text}>Sign In</Text>
      <Input
        value={email}
        onChangeText={setEmail}
        placeHolder="Email"
        customStyle={styles.input}
        secureTextEntry={false}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeHolder="Password"
        customStyle={null}
        secureTextEntry={true}
      />
      <Button
        label="Sign In"
        onPress={handleSignIn}
        customStyle={[styles.signInBtn]}
      />
      <View style={styles.bottomText}>
        <Text style={{ fontSize: 15 }}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.SIGNUP)}
        >
          <Text style={{ fontSize: 15, color: "blue" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    marginTop: 95,
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
    margin: "auto",
    marginBottom: 100,
  },
  backIcon: {
    width: 40,
    height: 40,
    left: 10,
    top: 15,
  },
  input: {
    marginBottom: 20,
  },
  signInBtn: {
    marginTop: 30,
    margin: "auto",
  },
  bottomText: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});
