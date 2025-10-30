import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingScreen from '../screens/SettingScreen'
import CartScreen from '../screens/CartScreen'
const TabNavigation = () => {
    const Tab = createBottomTabNavigator()
  return (
     <Tab.Navigator screenOptions={{headerShown : false}}> 
        <Tab.Screen  name="Settings" component={SettingScreen} />
       
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator> 
  )
}

export default TabNavigation

const styles = StyleSheet.create({})