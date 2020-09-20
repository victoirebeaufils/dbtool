import React from 'react';
import { StyleSheet,ScrollView} from 'react-native'
import ContentContainer from '../../components/ContentContainer'
import AcronymCards from '../../components/AcronymCards'
import MyText from '../../components/MyText'
export default function TIPSkillScreen(props) {
    return(
      <ScrollView style={styles.view}>
      <ContentContainer borderTopLeftRadius={40} borderTopRightRadius={40}>
      <AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Temperature"
        reflection="When we briefly change our temperature, we ground ourselves in the present moment and refocus."
        >
          <MyText style = {styles.paragraph}>Have you heard of the mammalian dive 
reflex? 
</MyText>
<MyText style={styles.paragraph}>
Try leaning over a sink or surface and placing cold water, ice or a cold pack over the temples, eyes and upper nose region for ~30 seconds. 
</MyText>
<MyText >This dive-like stance triggers a reflex that occurs in nature when mammals submerge in cold water. Think back to the last time you dove into a cold pool at the start of summer–you may recall the sensation of slowly cutting through the water with your arms, and a feeling of slowed time as you drifted up toward the surface. 

</MyText>
<MyText style={styles.paragraph}>As we dive face first into cold water, our heart rate slows and our breathing regulates as the body prepares to conserve energy for survival. </MyText>
        <MyText>We have engaged our parasympathetic nervous system and experience a calming effect.  
        </MyText>
        <MyText>So next time you feel highly activated, distressed, upset, angry think “T for temperature” and try running cold water on your forearms, taking a hot or cold shower, chewing on ice or just holding an ice cube in your hand.</MyText>
          </AcronymCards>


          <AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Intense exercise"
        
        >
          <MyText style={[props.style,styles.paragraph]}> Intense exercise or brief bursts of exercise can be helpful in the grounding process. </MyText>
          <MyText style={styles.paragraph}>Think of this process as ‘using up’ some of the energy that may be fueling high-energy emotions like anger or anxiety. </MyText>
          <MyText style={styles.paragraph}>When in a low-energy state (e.g. feeling, down, depressed, lethargic) getting the heart rate up will invigorate the individual.   
</MyText>
<MyText style = {styles.paragraph}>If you’re at a place in your treatment where you need to limit exercise, it would make more sense to try the T or P and P skills.</MyText>
          </AcronymCards>

          <AcronymCards
        backgroundColor="white"
        borderRadius={35}
        acronym="Paced breathing"
        
        >
          <MyText style={styles.paragraph}>Paced breathing allows us to activate our parasympathetic nervous system as we regulate and slow our breath. </MyText>
          <MyText style={styles.paragraph}>With paced breathing we breathe deeply into our lungs and diaphragm. As we slow the pace of our in-breaths and out-breaths, we may achieve 5-6 thoughtful breaths per minute.  
</MyText>
<MyText style={styles.paragraph}>Some people refer to deep breathing as “having a pill in your pocket.” In other words, breathing is a highly accessible skill – available to you at all times no matter where you are – and one that can be very effective to calm and steady you when emotion is riding high.</MyText>
        <MyText style={styles.title}>Progressive Muscle Relaxation</MyText>
        <MyText style={styles.paragraph}>Progressive Muscle Relaxation is paired with paced breathing. </MyText>
        <MyText style={styles.paragraph}>With paced breathing we tense and relax muscle groups throughout the body to promote a relaxing effect. </MyText>
        <MyText style={styles.paragraph}>If you are feeling extreme emotion, you may try mindfully tensing all of your muscle groups at once… and then dropping your weight back into the ground or into your chair</MyText>
        <MyText style={styles.paragraph}>As you travel from head to toe engaging all of your muscle groups simultaneously or one area at a time, pay close attention to the sensations in your body.</MyText>
        <MyText style={styles.paragraph}>Source: https://columbuspark.com/2018/04/23/easily-accessible-effective-tip-distress-tolerance-skills/#:~:MyText=As%20a%20Distress%20Tolerance%20tool,our%20emotions%20and%20behavioral%20responses.</MyText>
          </AcronymCards>
        </ContentContainer>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
 paragraph: {
   marginBottom:10,
 },
 view: {
  backgroundColor: '#E36D91'
 },
 title: {
  fontSize: 20,
  color: "#CC6181",
  marginBottom: 10,
  fontWeight: 'bold',
  textAlign: "center",
},
})