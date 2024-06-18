import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenNames } from "../navigation/screenNames";
import Input from "./components/input";
import JobCardList from "./components/jobCardList";

const HomePage = ({ navigation }: {navigation: any}) => {
  const [Search, setSearch] = React.useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.LANDINGPAGE)}
          >
            <Image
              source={require("../assets/left-arrow.png")}
              style={styles.icon}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Jobs</Text>
        </View>
        <Input
          value={Search}
          onChangeText={setSearch}
          placeHolder="Search Jobs"
          secureTextEntry={true}
          customStyle={null}
        />
        <View style={styles.jobListConatainer}>
          <JobCardList
            heading="Trainee Software Engineer"
            description="Launch Your First is looking for Trainee Software Engineer with  background from: Bachelor of Engineering, Master of Computer  Application"
            noOfApplicants={20}
          />
          <JobCardList
            heading="Trainee Software Engineer"
            description="Launch Your First is looking for Trainee Software Engineer with  background from: Bachelor of Engineering, Master of Computer  Application"
            noOfApplicants={20}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  icon: {
    top: 5,
    width: 40,
    height: 40,
    left: 10,
  },
  text: {
    top: 20,
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
    margin: "auto",
    right: 20,
    marginBottom: 40,
  },
  jobListConatainer: {
    alignItems: "center",
    rowGap: 35,
    marginTop: 30,
  },
});
