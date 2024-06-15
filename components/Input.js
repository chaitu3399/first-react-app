import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({value, onChangeText, placeHolder, secureTextEntry, customStyle}) => {
  return (
    <View style = {[styles.input, customStyle]}>
      <TextInput placeholder={placeHolder} 
        value = {value} 
        onChangeText={onChangeText} 
        secureTextEntry = {secureTextEntry} 
        style = {{fontSize: 17, padding: 10}}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
      width: 305,
      height: 48,
      borderWidth: 1,
      borderColor: '#607D8B40',
      borderRadius: 10,
      margin: 'auto',
    }
})