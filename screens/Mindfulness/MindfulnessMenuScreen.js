import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import SkillButton from '../../components/SkillButton'
export default function MindfulnessMenuScreen(props) {
  const MindfulnessSkills = [
    {title:"Acceptance and Change",description:"Learn to face situations without judgment",
    navigationPage: "AcceptanceAndChange"},
    {title:"What skills",description:"Learn to observe, describe and participate",
    navigationPage: "Effectively"},
    {title:"How skills",description:"Learn how to observe, describe and participate",
    navigationPage: "HowSkills"},
    {title:"Non-judgmentally",description:"Learn to describe facts non-judgmentally",
    navigationPage: "Nonjudgmentally"},
    {title:"Effectively",description:"Learn to simply do what works",
    navigationPage: "Effectively"},
    {title:"One Mindfully",description:"Learn how to keep one's mind from straying into emotion",navigationPage: "OneMindfully"},
  ]
  const skillButtons = MindfulnessSkills.map((obj, index)=>
  <SkillButton text={obj.title} description={obj.description} backgroundColor="#793DF2" key={index} style={styles.button} titleColor="#B7D1DF" color="#BCB6DE"
  navigation={props.navigation} navigationPage={obj.navigationPage}/>);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {skillButtons}
      </ScrollView>
  );
}
MindfulnessMenuScreen.navigationOptions = ({ navigation }) => {
  return {
     title: 'Screen Title',
     headerTintColor: 'royalblue',
     headerStyle: {
        backgroundColor: '#fff'
     }
  }
}
function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6542AC',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
