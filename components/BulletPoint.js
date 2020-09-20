import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default function BulletPoint(props) {
    return(
        <View style={styles.inline}>
            <View style = {styles.circle}></View>
            <Text style={styles.text}>{props.children}</Text>
        </View>    )
    }
    const styles = StyleSheet.create({
        inline:{
         flex: 1,
         flexDirection: 'row'
        },
text: {
    flex: 1,
},
        circle: {
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            marginTop: 10/2,
            backgroundColor: '#FF9800',
            marginRight: 5,
        }
    })