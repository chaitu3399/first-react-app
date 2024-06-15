import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "../components/Input";
import Button from "../components/Button";
import { screenNames } from "../navigation/screenNames";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    //Email Validation
    if (!email) {
      errors.push("Email is required.");
    } else if (!emailRegex.test(email)) {
      errors.push("Email is Invalid.");
    }

    //Password validation
    if (!password) {
      errors.push("Password is required.");
    } else if (password.length < 6) {
      errors.push("Password must be atleast 6 characters.");
    } else if (!digitRegex.test(password)) {
      errors.push("Password must contain at least one digit.");
    } else if (!specialCharRegex.test(password)) {
      errors.push("Password must contain at least one special symbol.");
    } else if (!uppercaseRegex.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }

    if (errors.length != 0) {
      alert(errors.join("\n"));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(screenNames.LANDINGPAGE)}
      >
        <Image
          source={require("../assets/left-arrow.png")}
          style={styles.icon}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.text}>Sign In</Text>
      <Input
        value={email}
        onChangeText={setEmail}
        placeHolder="Email"
        customStyle={styles.input}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeHolder="Password"
        secureTextEntry={true}
      />
      <Button
        label="Sign In"
        onPress={handleSignIn}
        customStyle={[styles.signInBtn]}
      />
      <TouchableOpacity onPress={() => navigation.navigate(screenNames.SIGNUP)}>
        <View>
          <Text
            style={{
              fontSize: 15,
              margin: "auto",
              marginTop: 10,
              color: "blue",
            }}
          >
            Don't have an account, sign-up
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    marginTop: 250,
    marginBottom: 15,
  },
  signInBtn: {
    marginTop: 20,
    margin: "auto",
  },
  icon: {
    top: 15,
    width: 12,
    height: 25,
    marginLeft: 15,
  },
  text: {
    top: 130,
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
    margin: "auto",
  },
});
