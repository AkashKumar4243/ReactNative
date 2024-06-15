import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={styles.container}>
      <Text >Home Screen</Text>
      <StatusBar style='auto' /> 
      <Link  href='/Profile' style={{color : 'blue'}} >Profile</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container :{
        display : "flex",
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
})