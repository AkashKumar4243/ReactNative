import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>
      <Link  href='../..' style={{color : 'blue'}} >Home</Link>
    </View>
  )
}

export default ThirdScreen

const styles = StyleSheet.create({
    container :{
        display : "flex",
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
})