import React from 'react'
import { Text, StyleSheet, ScrollView, View } from 'react-native'
import AcronymCards from '../../components/AcronymCards';
import Card from '../../components/Card'
import ContentContainer from '../../components/ContentContainer'
import BulletPoint from '../../components/BulletPoint'
import MyText from '../../components/MyText'
export default function IMPROVETheMomentScreen(props) {
  const borderRadius = 20;
  return (
    <ScrollView style={styles.view}>
    <ContentContainer borderTopLeftRadius={40} borderTopRightRadius={40}>
    <AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Imagery"
        >
          <MyText style = {styles.paragraph}>Use your imagination to create a better situation than the one that you’re currently in. 
</MyText>
<MyText style = {styles.paragraph}>Transport yourself to a safe space in which everything will turn out okay.</MyText>
<MyText style = {styles.paragraph}>Visualize a soothing situation. 
Allow yourself to tap into the details of the image; imagine how you would feel different physically if you were present in the scene.</MyText>
</AcronymCards>
<AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Meaning"
        >
          <MyText style = {styles.paragraph}>Tap into what is most important to you in life. </MyText>
          <MyText style = {styles.paragraph}>Consider what your values are, and shift your thoughts and actions so they are in line with those values. </MyText>
          <MyText style={styles.paragraph}>
In addition, find a purpose or reason for what you are going through. 
</MyText>
<MyText style={styles.paragraph}>What meaning can you find in your experience getting through previous crises?</MyText>
</AcronymCards>
<AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Prayer"
        >
          <MyText style={styles.paragraph}>
          Prayer does not have to have a religious connotation. 
          </MyText>
          <MyText style={styles.paragraph}>
          Reap the benefits of prayer by using mindfulness to focus on your presence in the world. 
          </MyText>
          <MyText style={styles.paragraph}>
You can use a mantra, a quote or even a song lyric to ground you in the moment when you're feeling troubled
          </MyText>

        </AcronymCards>

        <AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Prayer"
        reflection ="When your body is calm, your mind will likely feel calm as well"
        >
         <MyText style={styles.paragraph}>Relaxation helps reduce the bodily tension often associated with emotional distress. </MyText>
         <MyText style={styles.paragraph}>To shift out of the painful moment, try deep breathing, stretching, or progressive muscle relaxation. </MyText>
         <MyText style={styles.paragraph}>Help your body feel more comfortable and calm. </MyText>
       
         </AcronymCards>
         <AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="One thing in the moment"
        reflection="Letting go of the past and worries about the future can help you refocus your energy on the task at hand.">
         <MyText style={styles.paragraph}>Using mindfulness to deliberately focus on just one thing at a time can be a powerful way to slow down your thoughts. </MyText>
         <MyText style={styles.paragraph}>Tune in to the present and focus on your breath in this moment, your sensations in this moment, your thoughts in this moment, etc...</MyText>
         </AcronymCards>

         <AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Vacation">
          <MyText style={styles.paragraph}>A vacation does not need to be an actual trip. It can be a brief break from your regular routine. 
</MyText>
          <MyText style={styles.paragraph}>Break out of your typical schedule for an afternoon to do something that you haven't done in a while. </MyText>
          <MyText style={styles.paragraph}>Whether it's meeting friends, walking outside, or taking a long, hot shower, this mini vacation allows you to escape your thoughts and enjoy.</MyText>
        </AcronymCards>
        <AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Encouragment">
            <MyText style={styles.paragraph}>Be honest with yourself and provide realistic, yet hopeful encouragement in order to get through a difficult time. </MyText>
            <MyText style={styles.paragraph}>
For example, remind yourself that the emotions you are experiencing are temporary and that you have gotten through times like this in the past. 
</MyText>
            <MyText style={styles.paragraph}>Or, tell yourself, “This too shall pass.” 
</MyText>
            <MyText style={styles.paragraph}>Keep your focus on the positive consequences that lie ahead and direct your thoughts on a healthy track.
</MyText>
        </AcronymCards>
        </ContentContainer>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#E36D91'
   },
   paragraph: {
    marginBottom:10,
  },
})