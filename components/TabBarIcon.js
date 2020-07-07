import { Ionicons, Feather, Octicons, FontAwesome } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  let icon;
  if(props.type == "feather") {
    icon = <Feather
    name={props.name}
    size={25}
    style={{ marginBottom: -3 }}
    color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
  }
  else if(props.type == "octicons"){
    icon = <Octicons
    name={props.name}
    size={25}
    style={{ marginBottom: -3 }}
    color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />}
  else if(props.type == "fontawesome") {
    icon = <FontAwesome
    name={props.name}
    size={25}
    style={{ marginBottom: -3 }}
    color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
  }
  
  return (
    <React.Fragment>
    {icon}
    </React.Fragment>
  );
}
