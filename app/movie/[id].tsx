import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
const details = () => {
    const {id}= useLocalSearchParams()
  return (
    <view>
      <Text>Movie details: {id}</Text>
    </view>
  )
}

export default details;
const styles= StyleSheet.create({})
