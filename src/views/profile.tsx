import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import UploadImage from "./components/uploadImage";
import Input from "./components/input";
import { screenNames } from "../navigation/screenNames";
import Button from "./components/button";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

const Profile = ({ navigation }: {navigation: any}) => {
  const [userName, setUserName] = useState("");
  const [college, setCollege] = useState();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [about, setAbout] = React.useState("");

  const handleSave = () => {
    const dateOfBirthRegex =
      /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/;
    let errors: Array<String> = [];
    const sexOptions: String = 'MALE'
    if (!course) {
      errors.push("Course is required.");
    }

    if (!dateOfBirth) {
      errors.push("Date of Birth is required.");
    } else if (dateOfBirthRegex.test(dateOfBirth)) {
      errors.push("Date of Birth should be in DD/MM/YYY format.");
    }

    if (!sex) {
      errors.push("Sex is Required");
    } else if (sex.toLocaleUpperCase() != "MALE" || sex.toLocaleUpperCase() != "FEMALE") {
      errors.push("Enter Male or Female");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.SIGNUP)}
          >
            <Image
              source={require("../assets/left-arrow.png")}
              style={styles.icon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.heading}>Profile</Text>
        </View>
        <UploadImage customStyle={styles.profileImage} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name</Text>
          <Input
            value={userName}
            onChangeText={setUserName}
            placeHolder="John Doe"
            customStyle={null}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>College</Text>
          <Input
            value={college}
            onChangeText={setCollege}
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
          <Text style={styles.label}>Course</Text>
          <Input
            value={course}
            onChangeText={setCourse}
            placeHolder="B. Tech Computer Sciences"
            customStyle={null}
            secureTextEntry={false}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { margin: "auto", marginTop: 5 }]}>
              Date of Birth
            </Text>
            <Input
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              placeHolder="DD/MM/YYYY"
              customStyle={styles.input}
              secureTextEntry={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { margin: "auto", marginTop: 5 }]}>
              Sex
            </Text>
            <Input
              value={sex}
              onChangeText={setSex}
              placeHolder="Male"
              customStyle={styles.input}
              secureTextEntry={false}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <Input
            value={address}
            onChangeText={setAddress}
            placeHolder="Area, City, State, Country"
            customStyle={null}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label]}>About</Text>
          <Input
            value={about}
            onChangeText={setAbout}
            placeHolder="I am Krishna Chaitanya"
            customStyle={{ height: 100, top: 25 }}
            secureTextEntry={false}
          />
        </View>
        <Button
          label="Save"
          onPress={handleSave}
          customStyle={[styles.saveBtn]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "700",
    margin: "auto",
    paddingRight: 35,
  },
  cameraIcon: {
    width: 50.71,
    height: 50.51,
    position: "absolute",
  },
  profileImage: {
    margin: "auto",
  },
  label: {
    fontSize: 17,
    lineHeight: 19.92,
    fontWeight: "400",
    padding: 30,
  },
  inputContainer: {
    width: 375,
    height: 101,
  },
  icon: {
    width: 40,
    height: 40,
  },
  input: {
    width: (winWidth - 40) / 2,
  },
  saveBtn: {
    marginTop: 100,
    margin: "auto",
    marginBottom: 30,
  },
});
