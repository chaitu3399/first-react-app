import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const { width: winWidth} = Dimensions.get("window");

type props = {
  heading: string,
  description: string,
  noOfApplicants: number
}

const JobCardList: React.FC<props> = ({ heading, description, noOfApplicants }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.shortListContainer}>
        <Text style={styles.shortListText}>Shortlist</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("images/jobImage.jpg")}
          style={styles.image}
        />
        <View style={{ bottom: 15 }}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.lastContent}>
        <Text style={styles.applicantsCount}>Applicants: {noOfApplicants}</Text>
        <TouchableOpacity
          style={{ flex: 1, alignItems: "flex-end", width: 35, height: 22 }}
        >
          <Text style={styles.share}>Share</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default JobCardList;

const styles = StyleSheet.create({
  container: {
    width: winWidth - 30,
    height: 200,
    borderWidth: 1,
    borderColor: "#979797",
    borderRadius: 10,
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    height: 76.71,
    width: 100,
    marginRight: 5,
  },
  shortListContainer: {
    width: 50,
    height: 22,
    alignSelf: "flex-end",
  },
  shortListText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    color: "#007AFF",
    letterSpacing: -0.41,
  },
  description: {
    width: winWidth - 150,
    height: 80,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.41,
    letterSpacing: -0.53,
    textAlign: "justify",
  },
  lastContent: {
    flexDirection: "row",
  },
  heading: {
    marginBottom: 3,
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: -0.53,
  },
  share: {
    color: "#007AFF",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  applicantsCount: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
});
