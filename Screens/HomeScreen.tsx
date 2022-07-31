import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
       onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

// dev