import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native'
import AcronymCards from '../../components/AcronymCards';
import Card from '../../components/Card'
import ContentContainer from '../../components/ContentContainer'
export default function SelfShootheScreen(props) {
  const borderRadius = 20;
  return (
    <ScrollView style={styles.view}>
    <ContentContainer borderTopLeftRadius={40} borderTopRightRadius={40}>
      <Card backgroundColor="#BF2654" borderRadius={borderRadius} >
        <Text style={styles.text}>
          SELF-SOOTHING has to do with comforting, nurturing and being kind to yourself. One way to think of this is to think of ways of soothing each of your five senses.
                </Text>
      </Card>
      <AcronymCards
        backgroundColor="white"
        borderRadius={borderRadius}
        acronym="Vision"
      >
        <Text>Walk in a pretty part of town.</Text>
        <Text> Look at the nature around you. </Text>
        <Text>Go to a museum with beautiful art. </Text>
        <Text>Buy a flower and put it where you can see it.</Text>
        <Text>Sit in a garden.</Text>
  <Text> Watch the snowflakes decorate the trees during a snowfall. </Text>
          <Text>Light a candle and watch the flame. Look at a book with beautiful scenery or beautiful art.</Text>
          <Text>Watch a travel movie or video.
</Text>
     </AcronymCards>
        </ContentContainer>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
        text: {
        color: "white",
  },
  view: {
   backgroundColor: '#E36D91'
  }
})