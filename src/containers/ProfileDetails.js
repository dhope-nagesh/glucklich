import React, { Component } from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'User Profile',
    headerTintColor: '#FFF', 
    headerTitleStyle: {
      fontSize: 18,
      color: '#FFF',
      width: '100%'
    },
    headerStyle:{ 
      backgroundColor:'#47a3e6' 
    }
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>Welcome UserX</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '500'
  }
});