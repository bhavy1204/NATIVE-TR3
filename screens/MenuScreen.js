import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MenuScreen = () => {
    const navigation = useNavigation()
  const menuItems = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' },
    { id: 3, name: 'Fries' },
  ];
  return (
   
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Pressable onPress={()=>navigation.navigate(
                'MenuDetails' , {menuName : item.name}
            )}>
                <Text>
                {item.name}</Text></Pressable>
          </View>
        )}
      />
 
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
    container : {
        marginVertical :20 ,
      
        borderWidth : 2 ,
        borderColor : 'gray' ,
        borderRadius : 5,
        padding : 20 ,
        color : 'white' ,
        marginHorizontal : 20,
        fontSize : 20  ,
        fontWeight : 800
    }
});
