import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    // <Stack.Screen  name='index' options={{headerShown : false}}/>
    <Slot />
  )
}

export default RootLayout

const styles = StyleSheet.create({
//   container :{
//     display : "flex",
//     flex : 1,
//     alignItems : "center",
//     justifyContent : "center"
// }
})