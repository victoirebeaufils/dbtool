import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native'
import Card from './Card'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function AcronymCards(props) {
  return (
    <Card backgroundColor={props.backgroundColor ? props.backgroundColor : "white"} borderRadius={props.borderRadius ? props.borderRadius : 20}>
      <Text style={styles.title}>{props.action ? <Text>{props.action}</Text> : ""}<Text style={styles.acronym}>{props.acronym}</Text></Text>
      {props.description ? <Text style={styles.paragraph}>{props.description}
      </Text> : null}

      {props.image ? props.image == "placeholder" ?
        <Image style={styles.images}
          source={require('../assets/images/icon.png')
          }></Image> :
        <Text>Image hasnt been implemented yet</Text>
        : null}
      {props.reflection ?
        <React.Fragment>
          <Text style={styles.title}>Reflect</Text>
          <View style={styles.bubble}>

            <Text style={styles.paragraph}>{props.reflection}</Text>

          </View>
        </React.Fragment>
        : null}
        {props.children }
    </Card>
  )
}

const styles = StyleSheet.create({

  paragraph: {
    color: "#5B6393",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#6972AA",
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: "center",
  },
  acronym: {
    color: "#CC6181",

  },
  col: {
    flexDirection: 'row',
    flex: 1,
  },
  images: {
    alignSelf: 'center',
    marginBottom: 20
  },
  bubble: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 20
  }

})