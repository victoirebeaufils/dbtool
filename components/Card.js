import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Card(props) {

return (
    <View style={[styles.card,{backgroundColor: props.backgroundColor?props.backgroundColor:"white", borderRadius: props.borderRadius?props.borderRadius:0}]}>
        {props.children}
    </View>
)


}

const styles = StyleSheet.create(
    {
        card: {
            padding:20,
            paddingHorizontal:25,
            borderRadius: 20,
            marginBottom: 20,
           
        }, 
        children: {
            color:"white"
        }
    }
)