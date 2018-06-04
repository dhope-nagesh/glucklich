import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, ScrollView  } from 'react-native';
import Feed from '../components/Feed';

export default class NewsFeeds extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'News Feeds',
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
    const feeds = [1, 1, 1, 2, 4, 1, 1, 1, 2, 4, 1, 1, 1, 2, 4].map((i, index) => <Feed key={index} />)
    return(
      <ScrollView  style={styles.container}>

        { feeds }
      </ScrollView >
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