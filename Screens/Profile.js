import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import UploadImage from "../components/UploadImage";
import Input from "../components/Input";
import { screenNames } from "../navigation/screenNames";
const Profile = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [college, setCollege] = useState();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [about, setAbout] = React.useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 15 }}>
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
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>College</Text>
          <Input
            value={college}
            onChangeText={setCollege}
            placeHolder="Oxford University"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <Input
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeHolder="9876543210"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Input
            value={email}
            onChangeText={setEmail}
            placeHolder="test@example.com"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Course</Text>
          <Input
            value={course}
            onChangeText={setCourse}
            placeHolder="B. Tech Computer Sciences"
            style={styles.input}
          />
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <Input
              value={email}
              onChangeText={setEmail}
              placeHolder="test@example.com"
              style={styles.input}
            />
          </View>
        </View>
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
    paddingRight: 15,
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
    fontWeight: "400",
  },
  inputContainer: {
    innerWidth: 375,
    height: 101,
  },
});
