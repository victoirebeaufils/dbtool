import React from 'react';
import {Text, StyleSheet,ScrollView} from 'react-native'
export default function ProsAndConsScreen(props) {
    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text>Hi</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E36D91',
      },
      contentContainer: {
        paddingTop: 15,
      },
})