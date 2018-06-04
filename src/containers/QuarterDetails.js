import React, { Component } from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import QuaterMembers from '../components/QuaterMembers';

export default class QuarterDetails extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Quarter Details',
    // headerTintColor: '#FFF', 
    headerTitleStyle: {
      fontSize: 18,
      // color: '#FFF',
      width: '100%'
    },
    headerStyle:{ 
      // backgroundColor:'#47a3e6' 
    }
  };

  render(){
    let quarderDetails = this.props.navigation.state.params.quarderDetails;
    console.log(this.props.navigation.state.params, "quater.")
    const renderTabs = Object.keys(quarderDetails).map((v, index) => {
      console.log(v, 'quater')
      return (
        <Tab heading={v} key={index}>
          <QuaterMembers members={quarderDetails[v]}/>
        </Tab>
      )
    })
    return (
      <Container>
        <Tabs>
          {renderTabs}
        </Tabs>
      </Container>
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