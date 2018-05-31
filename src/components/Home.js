import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, DrawerLayoutAndroid } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.navigation.state.params.info
        }
        console.log(this.state, 'props')
    }
    static navigationOptions = ({ navigation }) => ({
        header: null
        // title: none,
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        //     flex: 1
        // }
    });

     
    render() {
        const navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
          );
        return (
            <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
<View style={styles.container}>
                
                <Image source={{ uri: this.state.user.picture}} style={{width: 200, height: 200, borderRadius: 100}} />
                <Text style={{ fontSize: 40 }}> {this.props.navigation.state.params.title} </Text>
            </View>
      </DrawerLayoutAndroid>
            
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    }
});