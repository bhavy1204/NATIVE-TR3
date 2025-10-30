import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TabNavigation from './TabNavigation'
const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()
  return (
 <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name='Profile' component={TabNavigation}/>
 </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})