import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import SkillButton from '../components/SkillButton'
import SearchBar from '../components/SearchBar'
import DistressToleranceMenuScreen from './DistressTolerance/DistressToleranceMenuScreen';
import TagList from '../components/TagList';
export default function SearchScreen(props) {
  const DistressToleranceSkills = [
    {title:"TIP Skill",description:"Learn to alleviate distress quickly"},
    {title:"Distract with ACCEPTS",description:"Learn to face situations without judgment"},
    {title:"Self soothe",description:"Learn to behave in a kind and gentle way to yourself"},
    {title:"IMPROVE the moment",description:"Use this skill in moments of distress to help one relax"},
    {title:"Pros and Cons",description:"Think about the positive and negative things about not tolerating distress"},
    {title:"Radical acceptance",description:"Let go of fighting reality and accept the situation for what it is"},
    {title:"Turning the mind",description:"Turn the mind towards an acceptance state"},
    {title:"Willingness vs Willfulness",description:"Be willing and open to do what is effective"},
  ]
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <SearchBar/>
      <TagList/>
      <View style={styles.modulesContainer}>
      <SkillButton backgroundColor="#6542AC" text="Mindfulness" navigation={props.navigation} navigationPage="MindfulnessMenu" titleColor="white" />
      <SkillButton backgroundColor="#E35F7D" text="Distress Tolerance" navigation={props.navigation} navigationPage="DistressToleranceMenu" titleColor="white"/>
    <SkillButton backgroundColor="#5D73E0" text="Emotion Regulation"  navigation={props.navigation} navigationPage="EmotionRegulationMenu" titleColor="white"/>
    <SkillButton backgroundColor="#3F78A8" text="Interpersonal Effectiveness"  navigation={props.navigation} navigationPage="InterpersonalEffectivenessMenu" titleColor="white"/>
    {/*<SkillButton backgroundColor="#66A9FF" text="Chain Analysis" navigationPage="MindfulnessMenu"/>*/}
    </View>
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

const { height, width } = Dimensions.get('window');
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fafafa',
    color: '#9796A3',
    
  },
  modulesContainer: {
    paddingVertical: 20,
    backgroundColor:"#EDEDED",
  flex: 1,
  height: height,
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
