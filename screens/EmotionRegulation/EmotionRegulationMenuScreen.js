import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import SkillButton from '../../components/SkillButton'
export default function EmotionRegulationMenuScreen(props) {
  const EmotionRegulationSkills = [
    {title: "Please", description:"Maintain a healthy body so you're more likely to have healthy emotions",
    navigationPage: "PLEASE" },
    {title: "Build Mastery", description:"Try to do one thing a day to help build competence and control" ,
    navigationPage: "BuildMastery"},
    {title: "Opposite action", description:"Learn how to replace an emotion with the emotion that is opposite",
    navigationPage: "OppositeAction" },
    {title: "Story of emotion", description:"Learn to understand what kind of emotions you are feeling",
    navigationPage: "StoryOfEmotion" },
    {title: "Problem solving", description:"Learn how to solve a problem when emotion is justified",
    navigationPage: "ProblemSolving" },
    {title: "Letting go of emotional suffering", description:"Observe and experience an emotion, accept it, then let it go",
    navigationPage: "EmotionalSuffering" },
  ]
  const skills = EmotionRegulationSkills.map((skill, index)=>
    <SkillButton text={skill.title} description={skill.description} 
    navigationPage={skill.navigationPage} navigation={props.navigation}
    backgroundColor="#7086EB" key={index} titleColor="#F9FDFF" color="#F9FDFF"/>
  )
    return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
     {skills}
      </ScrollView>
  );
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
    backgroundColor: '#5D73E0',
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
