import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 60, height: 60}} source={require('../assets/admin-icon.jpeg')} />
        <Text numberOfLines={3} style={styles.textContainer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        paddingBottom: 5,
        paddingTop: 10,
        margin: 0,
    },
    textContainer: {
        textAlign: 'justify',
        flex: 1
    }
});