import React, { Component } from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'User Profile',
    headerTitleStyle: {
      fontSize: 18,
      width: '100%'
    }
  };

  render(){
    let userData = this.props.navigation.state.params.userData;
    return(
      <View style={styles.container}>
        <Image source={{ uri: userData.user.image_path }} style={{width: 200, height: 200, borderRadius: 100}} />
        <Text style={styles.textStyle}>{userData.user.user.first_name}</Text>
        <Text style={styles.textStyle}>{userData.quarter.name}</Text>
        <Text style={styles.textStyle}>Email: {userData.user.user.username}</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 20
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    padding: '3%'
  }
});