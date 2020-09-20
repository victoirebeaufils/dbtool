import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native'
import Card from '../../components/Card'
import ContentContainer from '../../components/ContentContainer'
export default function DiaryCardFormScreen (props) {
return (
    <ScrollView style={styles.view}>
    <ContentContainer borderTopLeftRadius={40} borderTopRightRadius={40}>
        <Card><Text>hELLO</Text></Card>
        </ContentContainer>
        </ScrollView>
)

}


const styles = StyleSheet.create({
  view: {
    backgroundColor: '#E36D91'
   },
});