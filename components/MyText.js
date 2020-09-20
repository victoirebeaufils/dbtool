import React from 'react'
import {StyleSheet, Text} from 'react-native'


export default function MyText(props) {

    return (
        <Text style={[props.style, styles.text]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#6972AA',
        
    }
})
