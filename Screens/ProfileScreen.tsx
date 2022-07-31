import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = ({route}) => {
  return (
    <View>
      <Text style={{color: "#000"}}>{route.params.name}</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})