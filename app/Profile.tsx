import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Link href='SecondScreen'  style={{color : 'blue'}}>SecondScreen</ Link>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container :{
    display : "flex",
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
}
})