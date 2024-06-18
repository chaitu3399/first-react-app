import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


type props = {
  label: string,
  onPress: any,
  customStyle: any
}

const Button: React.FC<props> = ({label, onPress, customStyle}) => {
  return (
    <View style = {customStyle}>
      <TouchableOpacity style = {styles.button} onPress = {onPress}>
      <Text style = {styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: 170,
        height: 50,
        backgroundColor: '#1961FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
    },
    buttonLabel: {
        fontSize: 18,
        color: '#FFFFFF'
    }
})