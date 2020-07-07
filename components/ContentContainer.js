import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native'

export default function ContentContainer(props) {
return(
<ScrollView style={[styles.container,{ borderTopLeftRadius: props.borderTopLeftRadius, 
        borderTopRightRadius: props.borderTopRightRadius} ]} contentContainerStyle={styles.contentContainer}>
{props.children}
    </ScrollView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CC5570',
       
      },
      stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
      },
      contentContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingTop: 15,
    
      },
})


