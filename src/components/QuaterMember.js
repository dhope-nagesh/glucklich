import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions
} from 'react-native'

export default class QuaterMember extends Component {
  render() {
      const imagePath = this.props.imagePath?{ uri: this.props.imagePath }: require('../assets/profile-icon.jpg')
      
    return (
        <View style={styles.card}>
            <Image style={styles.image}  source={imagePath} />
            <Text numberOfLines={1} style={styles.textContainer}>{this.props.name}{this.props.isCaptain?'*':''}</Text>
        </View>
    )
  }
}

const width = Dimensions.get('window').width
const cardWidth = (width / 2) * 0.60

const styles = StyleSheet.create({
    card: {
        width: cardWidth,
        marginTop: 10
    },
    image: {
        width: cardWidth,
        height: cardWidth,
        borderRadius: cardWidth / 2
    },
    textContainer: {
        fontSize: 15,
        textAlign: 'center'
    }
});
