import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


import Button from "./components/button";
import { screenNames } from "../navigation/screenNames";
import Input from "./components/input";

const Signup = ({ navigation }: {navigation: any}) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [college, setcollege] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    let errors: Array<String> = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    //Handling username
    if (!userName) {
      errors.push("User Name is Required.");
    }
    //Hadling college name
    if (!college) {
      errors.push("College Name is Required.");
    }
    //Handling phone number
    if (!phoneNumber) {
      errors.push("Phone Number is Required.");
    } 
    //Handling Email
    if (!email) {
      errors.push("Email is required.");
    } else if (!emailRegex.test(email)) {
      errors.push("Email is Invalid.");
    }
    //Handle password
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
    } else if (!confirmPassword) {
      errors.push("You need to confirm the password.");
    } else if (password != confirmPassword) {
      errors.push("Password does not match, please try again.");
    }
    if (errors.length != 0) {
      Alert.alert(errors.join("\n"));
    } else {
      navigation.navigate(screenNames.PROFILE);
    }
  };

  return (
    <SafeAreaView style = {{flex: 1, alignItems: 'center'}}>
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.LANDINGPAGE)}
          >
            <Image
              source={require("images/left-arrow.png")}
              style={styles.icon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name</Text>
          <Input
            value={userName}
            onChangeText={setUserName}
            placeHolder="John Doe"
            customStyle={{alignSelf: 'center'}}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>College</Text>
          <Input
            value={college}
            onChangeText={setcollege}
            placeHolder="Oxford University"
            customStyle={null}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <Input
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeHolder="9876543210"
            customStyle={null}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Input
            value={email}
            onChangeText={setEmail}
            placeHolder="test@example.com"
            customStyle={null}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <Input
            value={password}
            onChangeText={setPassword}
            placeHolder="Test@123"
            customStyle={null}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <Input
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeHolder="Test@123"
            customStyle={null}
            secureTextEntry={true}
          />
        </View>
        <Button
          label="Sign Up"
          onPress={handleSignUp}
          customStyle={styles.signUp}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  label: {
    fontSize: 17,
    lineHeight: 19.92,
    fontWeight: "400",
    padding: 20,
  },
  inputContainer: {
    width: 375,
    height: 101,
  },
  signUp: {
    margin: "auto",
    marginTop: 35,
    marginBottom: 30,
  },
  icon: {
    top: 15,
    width: 40,
    height: 40,
    left: 10,
  },
  text: {
    top: 20,
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 20,
    marginHorizontal: 'auto'
  },
  
});
