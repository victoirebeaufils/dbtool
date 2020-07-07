import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import SkillButton from '../../components/SkillButton'
export default function InterpersonalEffectivenessMenuScreen(props) {
  const InterpersonalEffectivenessSkills = [ 
    {
      title: "DEAR MAN",
      description: "Learn to convey your needs to another person",
      navigationPage: "DEARMAN"
    },
  {
    title: "GIVE",
    description: "Learn to  maintain your relationships",
    navigationPage: "GIVE"
  },
  {
    title: "FAST",
    description:"Maintain your self-respect",
    navigationPage: "FAST"
  },
  ]
  const skills = InterpersonalEffectivenessSkills.map((skill, index) =>
  <SkillButton backgroundColor="#3199F2" text={skill.title} 
  description={skill.description} color="#E2F9F3" titleColor="#E2F9F3"
  navigation={props.navigation}
  navigationPage={skill.navigationPage}/>)
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
    backgroundColor: '#2981CC',
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
