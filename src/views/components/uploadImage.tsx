import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";


const UploadImage = ({ customStyle }: {customStyle: any}) => {
  const [image, setImage] = useState<any|null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={customStyle}>
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C4C4C4",
    width: 150,
    height: 150,
    borderRadius: 99,
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
  },
});
