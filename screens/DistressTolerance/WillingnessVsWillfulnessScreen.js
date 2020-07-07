import React from 'react';
import {Text, StyleSheet,ScrollView} from 'react-native'
export default function WillingnessVsWillfulnessScreen(props) {
    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.paragraph}>Hi</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E36D91',
       
      },
      contentContainer: {
        marginHorizontal: 30,
        marginVertical:10,
        paddingTop: 15,
      },
      paragraph: {
        color: "#F3F5DD",
      }
})