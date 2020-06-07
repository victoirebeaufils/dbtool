import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
const SkillButton = (props) => {

    return(
        <View>
            <TouchableOpacity style={[styles.button,{backgroundColor: props.backgroundColor}]}>
                <Text style= {styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )



}

const styles = StyleSheet.create({
    button: {
        shadowRadius:0,
        shadowColor:'transparent',
        shadowOpacity:0,
        padding:20,
        marginLeft:20,
        marginRight:20, 
        borderRadius: 15,
        marginBottom:15,
         
    },
    buttonText: {
        fontSize:20
    }


})
export default SkillButton;