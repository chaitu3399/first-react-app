import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React from "react";

const { width: winWidth} = Dimensions.get("window");


type props = {
  value: any,
  onChangeText: any,
  placeHolder: string,
  secureTextEntry: boolean,
  customStyle: any
}

const Input: React.FC<props> = ({
  value,
  onChangeText,
  placeHolder,
  secureTextEntry,
  customStyle,
}) => {
  return (
    <View style={[styles.input, customStyle]}>
      <TextInput
        placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={{ fontSize: 17, padding: 10 }}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: winWidth - 40,
    height: 48,
    borderWidth: 1,
    borderColor: "#607D8B40",
    borderRadius: 10,
    margin: "auto",
  },
});
