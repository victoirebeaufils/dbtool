import React from 'react';
import {Text, StyleSheet,ScrollView} from 'react-native'
export default function ProblemSolvingScreen(props) {
    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text>Hi</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6542AC',
      },
      contentContainer: {
        paddingTop: 15,
      },
})