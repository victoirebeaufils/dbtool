import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image, Dimensions } from 'react-native'
import Card from '../../components/Card';
import AcronymCards from '../../components/AcronymCards';
import ContentContainer from '../../components/ContentContainer';
export default function DistractWithACCEPTSScreen(props) {
const borderRadius = 20;
  return (
    <ContentContainer>
      <AcronymCards 
      backgroundColor="white"
      borderRadius={borderRadius}
      action="Distract with "
       acronym="Activities"
       description="Do hobbies, watch a video, go for a walk, play a sport, cook, garden, go fishing, go shopping."
       reflection="What other activities can you think of that you can get involved in and distract yourself from your distress?"
       image="placeholder"/>
      
      <AcronymCards
      acronym="Contributing"
      backgroundColor="white"
      action="Distract with "
      borderRadius={borderRadius}
      description="Contribute. Do volunteer work. Babysit so a friend can go out. Do something nice or surprising for someone."
      reflection="What have you done this week to contribute? What can you do next week to contribute? Plan something in advance. This takes you away from your pain and puts your attention on your concern for someone else."
      image="placeholder"></AcronymCards>
      <AcronymCards
        backgroundColor="white"
        borderRadius={borderRadius}
        action="Distract with "
      acronym="Compare"
      description="Compare yourself to people coping the same as or less well than you. If you are doing better than you were a year or two or five years ago, make that comparison. The manual suggests that you compare yourself to others' suffering, watch weepy soap operas, read about disasters. Some people find this helpful, others don't. Just do what works for you."
      reflection="What do you think about comparisons?"
      image="placeholder"/>
      
    
      <AcronymCards
        backgroundColor="white"
        borderRadius={borderRadius}
        action="Distract with "
      acronym="Emotions"
      description="Read emotional books, go to emotional movies, listen to emotional music. For this to work, you need to read or watch or listen to things that have an emotion opposite to one you are feeling. If you are sad, watch a comedy. Watch a scary movie. Listen to silly music. I think that the reason this works is that it kind of jars your feelings loose.  If you are sad or angry, watch a silly or funny movie, and bust up laughing, you have changed your emotion and put yourself in a different place."
      image="placeholder"
      />
       <AcronymCards
         backgroundColor="white"
         borderRadius={borderRadius}
         action="Distract with "
      acronym="Pushing Away"
      description="Build an imaginary wall between yourself and the situation.  Imagine yourself pushing it away with all your strength.

      Block the situation in your mind. Each time it comes up, tell it to go away, or put some other thoughts in its place, perhaps some more pleasant thoughts. Refuse to think about it. Try putting the pain on a shelf, or in a box, to contain it and get it out of the way. I use the technique of putting my distress in a locked box on a shelf in a closet. I can get it later, but right now I can let it go.
      
      All of these are techniques to give you a break from dealing with the pain all the time. They haven't resolved the painful situation, but they have put it away for awhile so that you get a break and a chance to live some part of your life without it."
      image="placeholder"
      />
       <AcronymCards
         backgroundColor="white"
         borderRadius={borderRadius}
       action="Distract with other "
      acronym="Thoughts"
      description="Some examples are counting to 10 or counting the tiles in a floor or the panes in a window or the stars in the sky, anything to keep your focus on the counting.  This is a good one to use in a sudden emergency, when you need to pull something out of your bag of tricks really quickly. Other ways of distracting with thoughts are reading, watching videos or movies, doing crossword puzzles or jigsaw puzzles, writing poetry, if you can keep your thoughts away from your pain."
      reflection="Can you think of some other ways of distracting with thoughts?"
      image="placeholder"
     />
       <AcronymCards
         backgroundColor="white"
         borderRadius={borderRadius}
      acronym="Sensations"
      action="Distract with other "
      description="You might hold ice in your hand or apply it to the back of your neck (I used to use a bag of frozen peas against the back of my neck - the sensation was kind of shocking, and it shook me out of my tangled up distressing feelings), put a rubber band on your wrist and snap it, listen to loud music, take a hot, hard shower, a cold, hard shower, or swim in very cold water. Any strong physical stimulus like this can kind of jog loose your connection to your pain and distract you from it. After you try one of these activities, you may want to go on to another distracting activities, such as one of the activities described in the last lesson.
    "
    image="placeholder"
      />
        <Text>www.dbtselfhelp.com</Text>
    </ContentContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E36D91',
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
  paragraph: {
    color: "#5B6393",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#6972AA",
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: "center",
  },
  acronym: {
    color: "#CC6181",

  },
  col: {
    flexDirection: 'row',
    flex: 1,
  },
  images: {
    alignSelf: 'center',
    marginBottom: 20
  },
  bubble: {
    backgroundColor: "#F5F5F5",
    padding:15,
    paddingHorizontal:25,
    borderRadius: 20
}
})