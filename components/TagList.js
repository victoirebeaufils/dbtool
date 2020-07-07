import React from 'react';
import {StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'
export default function TagList(props) {

    return(
        <ScrollView style={styles.tagContainer}
  horizontal={true} showsHorizontalScrollIndicator={false}
  >
      <TouchableOpacity style={styles.tag}><Text style={styles.tagText}>TIP Skills</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tag}><Text style={styles.tagText}>Self soothe</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tag}><Text style={styles.tagText}>Problem solving</Text></TouchableOpacity>
    
  </ScrollView>
    )

}
const styles = StyleSheet.create({
tag: {
    borderWidth: 1.5,
    paddingHorizontal:10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor:'#9796A3',
    marginBottom:15,
    
},
tagContainer: {
marginHorizontal:20
},
tagText:{
    color: '#9796A3',
    fontWeight: "700"
 }
})