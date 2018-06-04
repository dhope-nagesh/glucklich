import React, { Component } from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';

export default class PointsTable extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Points',
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
    let points = this.props.navigation.state.params.points;
    console.log(points, "points....")
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>Q1 : {points.q1.score__sum || 'No points'}</Text>
        <Text style={styles.textStyle}>Q2 : {points.q2.score__sum || 'No points'}</Text>
        <Text style={styles.textStyle}>Q3 : {points.q3.score__sum || 'No points'}</Text>
        <Text style={styles.textStyle}>Q4 : {points.q4.score__sum || 'No points'}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '500'
  }
});