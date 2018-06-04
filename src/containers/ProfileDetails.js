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
    let userData = this.props.navigation.state.params.userData;
    console.log(userData, "data")
    return(
      <View style={styles.container}>
        <Image source={{ uri: userData.image_path }} style={{width: 200, height: 200, borderRadius: 100}} />
        <Text style={styles.textStyle}>{userData.user.first_name}</Text>
        <Text style={styles.textStyle}>Email: {userData.user.username}</Text>
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
    padding: '3%'
  }
});