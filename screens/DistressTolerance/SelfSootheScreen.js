import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native'
import AcronymCards from '../../components/AcronymCards';
import Card from '../../components/Card'
import ContentContainer from '../../components/ContentContainer'
import BulletPoint from '../../components/BulletPoint'
import MyText from '../../components/MyText'
export default function SelfShootheScreen(props) {
  const borderRadius = 20;
  return (
    <ScrollView style={styles.view}>
    <ContentContainer borderTopLeftRadius={40} borderTopRightRadius={40}>
      <Card backgroundColor="#BF2654" borderRadius={borderRadius} >
        <Text style={styles.BulletPoint}>
          SELF-SOOTHING has to do with comforting, nurturing and being kind to yourself. One way to think of this is to think of ways of soothing each of your five senses.
                </Text>
      </Card>
      <AcronymCards
        backgroundColor="white"
        borderRadius={borderRadius}
        acronym="Vision"
      >
        <BulletPoint> <MyText> Walk in a pretty part of town.</MyText></BulletPoint> 
        <BulletPoint> <MyText> Look at the nature around you. </MyText></BulletPoint> 
        <BulletPoint> <MyText>Go to a museum with beautiful art. </MyText></BulletPoint> 
        <BulletPoint> <MyText>Buy a flower and put it where you can see it.</MyText></BulletPoint> 
        <BulletPoint> <MyText>Sit in a garden.</MyText></BulletPoint> 
  <BulletPoint> <MyText> Watch the snowflakes decorate the trees during a snowfall. </MyText></BulletPoint> 
          <BulletPoint> <MyText>Light a candle and watch the flame. Look at a book with beautiful scenery or beautiful art.</MyText></BulletPoint> 
          <BulletPoint> <MyText>Watch a travel movie or video.
</MyText></BulletPoint> 
     </AcronymCards>
     <AcronymCards
        backgroundColor="white"
        borderRadius={borderRadius}
        acronym="Hearing"
        reflection="When you are listening, be mindful, letting the sounds come and go"
      >
        <BulletPoint> <MyText>Listen to beautiful or soothing music, or to tapes of the ocean or other sounds of nature</MyText></BulletPoint> 
        <BulletPoint> <MyText>
          Listen to a baby gurgling or a small animal</MyText></BulletPoint> 
          <BulletPoint> <MyText>Sit by a waterfall</MyText></BulletPoint> 
          <BulletPoint> <MyText>Listen to someone chopping wood</MyText></BulletPoint> 
          
        </AcronymCards>
        <AcronymCards
        backgroundColor="white"
        borderRadius={borderRadius}
        acronym="Smell"
        
      >
        <BulletPoint> <MyText>Smell breakfast being cooked at home or in a restaurant</MyText></BulletPoint> 
<BulletPoint> <MyText>Walk in a garden or in the woods, maybe after it just rained, and breathe in the smells of nature</MyText></BulletPoint> 
<BulletPoint> <MyText>Light a scented candle or incense</MyText></BulletPoint> 
    <BulletPoint> <MyText>Bake some bread or a cake, and take in all the smells</MyText></BulletPoint> 
        </AcronymCards>

        <AcronymCards
        backgroundColor="white"
        borderRadius={borderRadius}
        acronym="Taste"
        >
<BulletPoint> <MyText>Have a special treat, and eat it slowly, savoring each bite</MyText></BulletPoint> 
<BulletPoint> <MyText>Cook a favorite meal</MyText></BulletPoint> 
<BulletPoint> <MyText>Drink a soothing drink like herbal tea or hot chocolate, Let the taste run over your tongue and slowly down your throat</MyText></BulletPoint> 
<BulletPoint> <MyText>Go to a potluck, and eat a little bit of each dish, mindfully tasting each new thing</MyText></BulletPoint> 

        </AcronymCards>

        <AcronymCards
        backgroundColor="white"
        borderRadius={borderRadius}
        acronym="Touch"
        >
          <BulletPoint> <MyText> Take a bubble bath</MyText></BulletPoint> 
   <BulletPoint> <MyText> Pet your dog or cat or cuddle a baby</MyText></BulletPoint> 
   <BulletPoint> <MyText>Sink into a really comfortable bed</MyText></BulletPoint> 
 <BulletPoint> <MyText> Float or swim in a pool, and feel the water caress your body</MyText></BulletPoint> 
          </AcronymCards>
        </ContentContainer>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
        BulletPoint: {
        color: "white",
  },
  view: {
   backgroundColor: '#E36D91'
  }
})