import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SecondScreen</Text>
      <Link href='ThirdScreen'  style={{color : 'blue'}}>ThirdScreen</ Link>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({
    container :{
    display : "flex",
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
}})