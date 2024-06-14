import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { Slot } from 'expo-router'

const RootLayout = () => {

  return (
   <View>
    <Text>Akash</Text>
    <StatusBar style='auto' />
    <Link  href='/profile' style={{color : 'blue', flex:1 ,alignItems: 'center', justifyContent : 'center'}} >Go to Profile</Link>
   </View>
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