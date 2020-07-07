import React from 'react';
import {Text, StyleSheet} from 'react-native'
export default function FASTScreen(props) {
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