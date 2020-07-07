import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import SkillButton from '../../components/SkillButton'
export default function DistressToleranceMenuScreen(props) {
const DistressToleranceSkills = [
  {title:"TIP Skill",description:"Learn to alleviate distress quickly",
navigationPage: "TIPSkill"},
  {title:"Distract with ACCEPTS",description:"Learn to face situations without judgment",
  navigationPage: "DistractWithACCEPTS"},
  {title:"Self soothe",description:"Learn to behave in a kind and gentle way to yourself",
  navigationPage: "SelfSoothe"},
  {title:"IMPROVE the moment",description:"Use this skill in moments of distress to help one relax",
  navigationPage: "IMPROVETheMoment"},
  {title:"Pros and Cons",description:"Think about the positive and negative things about not tolerating distress",
  navigationPage: "ProsAndCons"},
  {title:"Radical acceptance",description:"Let go of fighting reality and accept the situation for what it is",
  navigationPage: "RadicalAcceptance",},
  {title:"Turning the mind",description:"Turn the mind towards an acceptance state",
  navigationPage: "TurningTheMind"},
  {title:"Willingness vs Willfulness",description:"Be willing and open to do what is effective",
  navigationPage: "WillingnessVsWillfulness"},
];

const skillButtons = DistressToleranceSkills.map((obj, index)=>
  <SkillButton text={obj.title} description={obj.description} 
  navigationPage={obj.navigationPage} navigation={props.navigation} backgroundColor="#F285A7" key={index} titleColor="#F3F5DD" color="#F3F5DD"/>
)

  return (
 
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
         {skillButtons}
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
    backgroundColor: '#E36D91',
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
