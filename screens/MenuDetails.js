import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
export default function MenuDetails() {
    const route = useRoute() ;
    const {menuName} = route.params;
  return (
    <View>
      <Text>MenuDetails : {menuName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})