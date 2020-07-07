import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import TabBarIcon from './TabBarIcon'
export default function SearchBar (props) {

return(
    <View style={styles.bar}>
        <TabBarIcon name="search" size={24} color="black" type="feather" style={styles.tabBarIcon}/>
    <TextInput style={styles.text} value="Search for skills"></TextInput>
    </View>
)

} 

const styles = StyleSheet.create({
    bar: { 
        borderColor: '#9796A3', 
        borderWidth: 1, 
        borderRadius: 30,
       
        padding:10,
        marginLeft:20,
        marginRight:20, 
        marginBottom: 15,
        flexDirection: "row",
        shadowColor: "#000",

    },
    text: {
        color: '#9796A3',
        fontWeight: "700"
    },
    tabBarIcon: {
        marginRight: 10,
        padding: 10
    }
 
  });