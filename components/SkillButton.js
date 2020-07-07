import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

  
const SkillButton = (props) => {
    const link = props.navigationPage;
    console.log(link);
    return(
        <View>
            <TouchableOpacity style={[styles.button,{backgroundColor: props.backgroundColor}]}
             onPress={() => props.navigation.navigate(link)}>
                <Text style= {[styles.buttonText, {color: props.titleColor}]} >{props.text}</Text>
                {props.description ? <Text style={[styles.buttonDescription, {color: props.color}]}>{props.description}</Text>: null}
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
        fontSize:20,
        color: 'white',
    },
    buttonDescription: {
        fontSize: 13,
        fontWeight: "700",
        color:'white'
    }


})
export default SkillButton;