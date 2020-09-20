import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Feather, FontAwesome, Octicons } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import DiaryScreen from '../screens/DiaryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiaryCardFormScreen from '../screens/DiaryCard/DiaryCardFormScreen'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  //initialRouteName={INITIAL_ROUTE_NAME}

  return (
    <BottomTab.Navigator > 
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon name="home" color="blue" type="feather" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon name="search" size={24} color="black" type="feather" />,
        }}
      />
       <BottomTab.Screen
        name="Diary"
        component={DiaryCardFormScreen}
        options={{
          title: 'Diary',
          tabBarIcon: ({ focused }) => <TabBarIcon name="book" size={24} color="black" type="fontawesome"/>,
        }}
      />
         <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) =><TabBarIcon name="person" size={24} color="black" type="octicons" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/*function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}*/
