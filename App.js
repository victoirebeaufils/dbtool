import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import {useFonts,
  Roboto_500Medium
} from "@expo-google-fonts/roboto";
import { setCustomText } from 'react-native-global-props';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import ProfileScreen from './screens/ProfileScreen'
import DiaryScreen from './screens/DiaryScreen'

import LinkingConfiguration from './navigation/LinkingConfiguration';
import SkillButton from './components/SkillButton';

import MindfulnessMenuScreen from './screens/Mindfulness/MindfulnessMenuScreen'

import DistressToleranceMenuScreen from './screens/DistressTolerance/DistressToleranceMenuScreen';

import EmotionRegulationMenuScreen from './screens/EmotionRegulation/EmotionRegulationMenuScreen';

import InterpersonalEffectivenessMenuScreen from './screens/InterpersonalEffectiveness/InterpersonalEffectivenessMenuScreen';
import AcceptanceAndChangeScreen from './screens/Mindfulness/AcceptanceAndChangeScreen';
import EffectivelyScreen from './screens/Mindfulness/EffectivelyScreen';
import HowSkillsScreen from './screens/Mindfulness/HowSkillsScreen';
import NonjudgmentallyScreen from './screens/Mindfulness/NonjudgmentallyScreen';
import OneMindfullyScreen from './screens/Mindfulness/OneMindfullyScreen';
import WhatSkillsScreen from './screens/Mindfulness/WhatSkillsScreen';
import DistractWithACCEPTSScreen from './screens/DistressTolerance/DistractWithACCEPTSScreen';
import IMPROVETheMomentScreen from './screens/DistressTolerance/IMPROVETheMomentScreen';
import ProsAndConsScreen from './screens/DistressTolerance/ProsAndConsScreen';
import RadicalAcceptanceScreen from './screens/DistressTolerance/RadicalAcceptanceScreen';
import SelfShootheScreen from './screens/DistressTolerance/SelfSootheScreen';
import TIPSkillScreen from './screens/DistressTolerance/TIPSkillScreen';
import TurningTheMindScreen from './screens/DistressTolerance/TurningTheMindScreen';
import WillingnessVsWillfulnessScreen from './screens/DistressTolerance/WillingnessVsWillfulnessScreen';
import BuildMasteryScreen from './screens/EmotionRegulation/BuildMasteryScreen';
import EmotionalSufferingScreen from './screens/EmotionRegulation/EmotionalSufferingScreen';
import OppositeActionScreen from './screens/EmotionRegulation/OppositeActionScreen';
import PLEASEScreen from './screens/EmotionRegulation/PLEASEScreen';
import ProblemSolvingScreen from './screens/EmotionRegulation/ProblemSolvingScreen';
import DEARMANScreen from './screens/InterpersonalEffectiveness/DEARMANScreen';
import FASTScreen from './screens/InterpersonalEffectiveness/FASTScreen';
import GIVEScreen from './screens/InterpersonalEffectiveness/GIVEScreen';
import StoryOfEmotionScreen from './screens/EmotionRegulation/StoryOfEmotionScreen';

import DiaryCardFormScreen from './screens/DiaryCard/DiaryCardFormScreen'


const Stack = createStackNavigator();

export default function App(props) {
  let [fontsLoaded] = useFonts({
   Roboto_500Medium,
  });
  
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" /> }
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator >
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{
    headerShown: false
  }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Diary" component={DiaryScreen} />
            <Stack.Screen name="MindfulnessMenu" component={MindfulnessMenuScreen} 
            options={{ title: 'Mindfulness', headerStyle:{backgroundColor: "#6542AC"},  
            headerTitleStyle: {
            color: '#C2CCFF'
            },
            headerTintColor: '#C2CCFF',
             }}/>
              <Stack.Screen name="AcceptanceAndChange" component={AcceptanceAndChangeScreen}
               options={{ title: 'Acceptance and Change', headerStyle:{backgroundColor: "#6542AC"},  
               headerTitleStyle: {
               color: '#C2CCFF'
               },
               headerTintColor: '#C2CCFF',
                }}/>
              <Stack.Screen name="Effectively" component={EffectivelyScreen}  
              options={{ title: 'Effectively', headerStyle:{backgroundColor: "#6542AC"},  
            headerTitleStyle: {
            color: '#C2CCFF'
            },
            headerTintColor: '#C2CCFF',
             }}/>
              <Stack.Screen name="HowSkills" component={HowSkillsScreen} 
               options={{ title: 'How Skills', headerStyle:{backgroundColor: "#6542AC"},  
               headerTitleStyle: {
               color: '#C2CCFF'
               },
               headerTintColor: '#C2CCFF',
                }}/>
              <Stack.Screen name="Nonjudgmentally" component={NonjudgmentallyScreen} 
               options={{ title: 'Non-judgmentally', headerStyle:{backgroundColor: "#6542AC"},  
               headerTitleStyle: {
               color: '#C2CCFF'
               },
               headerTintColor: '#C2CCFF',
                }}/>
              <Stack.Screen name="OneMindfully" component={OneMindfullyScreen} 
               options={{ title: 'One Mindfully', headerStyle:{backgroundColor: "#6542AC"},  
               headerTitleStyle: {
               color: '#C2CCFF'
               },
               headerTintColor: '#C2CCFF',
                }}/>
              <Stack.Screen name="WhatSkills" component={WhatSkillsScreen} 
               options={{ title: 'What Skills', headerStyle:{backgroundColor: "#6542AC"},  
               headerTitleStyle: {
               color: '#C2CCFF'
               },
               headerTintColor: '#C2CCFF',
                }}/>
            <Stack.Screen name="DistressToleranceMenu" component={DistressToleranceMenuScreen}  options={{ title: 'Distress Tolerance', headerStyle:{backgroundColor: "#CC6282"},  
            headerTitleStyle: {
            color: '#F3F5DD'
            },
            headerTintColor: '#F3F5DD',
             }}/>
                 <Stack.Screen name="DistractWithACCEPTS" component={DistractWithACCEPTSScreen} 
                 options={{ title: 'Distract with ACCEPTS', headerStyle:{backgroundColor: "#E36D91",  elevation: 0, // remove shadow on Android
                 shadowOpacity: 0, // remove shadow on iOS
                 borderBottomWidth: 0,},  
                 headerTitleStyle: {
                 color: '#F3F5DD',
                     
            
                 },
                 headerTintColor: '#F3F5DD',
                  }}/>
                 <Stack.Screen name="IMPROVETheMoment" component={IMPROVETheMomentScreen} 
                 options={{ title: 'IMPROVE the moment', headerStyle:{backgroundColor: "#E36D91",  elevation: 0, // remove shadow on Android
                 shadowOpacity: 0, // remove shadow on iOS
                 borderBottomWidth: 0,},  
            headerTitleStyle: {
            color: '#F3F5DD'
            },
            headerTintColor: '#F3F5DD',
             }}/>
                 <Stack.Screen name="ProsAndCons" component={ProsAndConsScreen} 
                 options={{ title: 'Pros and Cons', headerStyle:{backgroundColor: "#E36D91",  elevation: 0, // remove shadow on Android
                 shadowOpacity: 0, // remove shadow on iOS
                 borderBottomWidth: 0,},  
                 headerTitleStyle: {
                 color: '#F3F5DD'
                 },
                 headerTintColor: '#F3F5DD',
                  }}/>
                 <Stack.Screen name="RadicalAcceptance" component={RadicalAcceptanceScreen} 
                 options={{ title: 'Radical Acceptance', headerStyle:{backgroundColor: "#E36D91",  elevation: 0, // remove shadow on Android
                 shadowOpacity: 0, // remove shadow on iOS
                 borderBottomWidth: 0,},  
                 headerTitleStyle: {
                 color: '#F3F5DD'
                 },
                 headerTintColor: '#F3F5DD',
                  }}/>
                 <Stack.Screen name="SelfSoothe" component={SelfShootheScreen} 
                 options={{ title: 'Self Soothe', headerStyle:{backgroundColor: "#E36D91",  elevation: 0, // remove shadow on Android
                 shadowOpacity: 0, // remove shadow on iOS
                 borderBottomWidth: 0,},  
                 headerTitleStyle: {
                 color: '#F3F5DD'
                 },
                 headerTintColor: '#F3F5DD',
                  }}/>
                 <Stack.Screen name="TIPSkill" component={TIPSkillScreen} 
                 options={{ title: 'TIP Skill', headerStyle:{backgroundColor: "#E36D91",  elevation: 0, // remove shadow on Android
                 shadowOpacity: 0, // remove shadow on iOS
                 borderBottomWidth: 0,},  
                 headerTitleStyle: {
                 color: '#F3F5DD'
                 },
                 headerTintColor: '#F3F5DD',
                  }}/>
                 <Stack.Screen name="TurningTheMind" component={TurningTheMindScreen} 
                 options={{ title: 'Turning the mind', headerStyle:{backgroundColor: "#E36D91",  elevation: 0, // remove shadow on Android
                 shadowOpacity: 0, // remove shadow on iOS
                 borderBottomWidth: 0,},  
                 headerTitleStyle: {
                 color: '#F3F5DD'
                 },
                 headerTintColor: '#F3F5DD',
                  }}/>
                 <Stack.Screen name="WillingnessVsWillfulness" component={WillingnessVsWillfulnessScreen} 
                 options={{ title: 'Willingness vs Willfulness', headerStyle:{backgroundColor: "#E36D91",  elevation: 0, // remove shadow on Android
                 shadowOpacity: 0, // remove shadow on iOS
                 borderBottomWidth: 0,},  
                 headerTitleStyle: {
                 color: '#F3F5DD'
                 },
                 headerTintColor: '#F3F5DD',
                  }}/>
            <Stack.Screen name="EmotionRegulationMenu" component={EmotionRegulationMenuScreen}  
            options={{ title: 'Emotion Regulation', headerStyle:{backgroundColor: "#5569CC"},  
            headerTitleStyle: {
            color: '#F3F5DD'
            },
            headerTintColor: '#F3F5DD',
             }}/>
                 <Stack.Screen name="BuildMastery" component={BuildMasteryScreen} 
                  options={{ title: 'Build Mastery', headerStyle:{backgroundColor: "#5569CC"},  
                  headerTitleStyle: {
                  color: '#F3F5DD'
                  },
                  headerTintColor: '#F3F5DD',
                   }}/>
                 <Stack.Screen name="EmotionalSuffering" component={EmotionalSufferingScreen}
                  options={{ title: 'Emotional Suffering', headerStyle:{backgroundColor: "#5569CC"},  
                  headerTitleStyle: {
                  color: '#F3F5DD'
                  },
                  headerTintColor: '#F3F5DD',
                   }}/>
                 <Stack.Screen name="OppositeAction" component={OppositeActionScreen} 
                  options={{ title: 'Opposite Action', headerStyle:{backgroundColor: "#5569CC"},  
                  headerTitleStyle: {
                  color: '#F3F5DD'
                  },
                  headerTintColor: '#F3F5DD',
                   }}/>
                    <Stack.Screen name="StoryOfEmotion" component={StoryOfEmotionScreen} 
                  options={{ title: 'Story of Emotion', headerStyle:{backgroundColor: "#5569CC"},  
                  headerTitleStyle: {
                  color: '#F3F5DD'
                  },
                  headerTintColor: '#F3F5DD',
                   }}/>
                 <Stack.Screen name="PLEASE" component={PLEASEScreen} 
                  options={{ title: 'PLEASE', headerStyle:{backgroundColor: "#5569CC"},  
                  headerTitleStyle: {
                  color: '#F3F5DD'
                  },
                  headerTintColor: '#F3F5DD',
                   }}/>
                 <Stack.Screen name="ProblemSolving" component={ProblemSolvingScreen} 
                  options={{ title: 'Problem Solving', headerStyle:{backgroundColor: "#5569CC"},  
                  headerTitleStyle: {
                  color: '#F3F5DD'
                  },
                  headerTintColor: '#F3F5DD',
                   }}/>

            <Stack.Screen name="InterpersonalEffectivenessMenu" component={InterpersonalEffectivenessMenuScreen} 
            options={{ title: 'Interpersonal Effectiveness', headerStyle:{backgroundColor: "#1D74BF"},  
            headerTitleStyle: {
            color: '#DFF0F6'
            },
            headerTintColor: '#DFF0F6',
             }}/>
             <Stack.Screen name="DEARMAN" component={DEARMANScreen} 
             options={{ title: 'DEARMAN', headerStyle:{backgroundColor: "#1D74BF"},  
             headerTitleStyle: {
             color: '#DFF0F6'
             },
             headerTintColor: '#DFF0F6',
              }}/>
             <Stack.Screen name="FAST" component={FASTScreen} 
             options={{ title: 'FAST', headerStyle:{backgroundColor: "#1D74BF"},  
             headerTitleStyle: {
             color: '#DFF0F6'
             },
             headerTintColor: '#DFF0F6',
              }}/>
             <Stack.Screen name="GIVE" component={GIVEScreen}
             options={{ title: 'GIVE', headerStyle:{backgroundColor: "#1D74BF"},  
             headerTitleStyle: {
             color: '#DFF0F6'
             },
             headerTintColor: '#DFF0F6',
              }}/>
              <Stack.Screen name="Diary Card" component={DiaryCardFormScreen}
              options={{headerStyle:{backgroundColor: "#FF7E51"},  headerTitleStyle: {
                color: '#FEFCE0'
                },
                headerTintColor: '#FEFCE0'
              }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
