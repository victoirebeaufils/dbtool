import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function ListItem(props) {
return(
<View>
<Text>{props.text}</Text>
</View>
)
}