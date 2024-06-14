import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import Profile from './Profile'
import { Link, NavigationContainer } from '@react-navigation/native';
const RootLayout = () => {

  const handlepress = () => {
   
  }
  return (
    <>
    <Text>Header</Text>
    <Slot />
   <Button title='this is a button' onPress={handlepress}/>
    <Text>Footer</Text>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container :{
    display : "flex",
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
}
})