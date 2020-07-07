import React from 'react';
import {View} from 'react-native'

export default function EmotionCircles(props) {

    return (
        <View>
            <Text>{props.joy}</Text>
        </View>
           <View>
           <Text>{props.anger}</Text>
       </View>
         <View>
         <Text>{props.sadness}</Text>
     </View>
       <View>
       <Text>{props.shame}</Text>
   </View>
     <View>
     <Text>{props.guilt}</Text>
 </View>
   <View>
   <Text>{props.fear}</Text>
</View>
    )

}