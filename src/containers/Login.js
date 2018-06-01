import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as simpleAuthProviders from 'react-native-simple-auth';
import googleSecrets from '../constants/secrets'
import Loader from '../components/Loader';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };
    onLogin = (e) => {
        simpleAuthProviders['google'](googleSecrets)
        .then((info) => {
            console.log(info)
            this.props.navigation.navigate('Home', { title: `${info.user.given_name} ${info.user.family_name}`, info })
        })
        .catch((error) => {
            console.log(error)
        })
        
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 60, textAlign: 'center' }}>
                    Glucklich
                </Text>
                <Image style={{marginLeft: '20%'}} source={require('../assets/glucklich-logo.jpeg')} />
                <TouchableOpacity style={{paddingLeft: '3%', height: '10%'}} onPress={this.onLogin}>
                    <View style={{borderColor:'#FFF', borderWidth: 1, backgroundColor: '#e6eaf7', borderRadius: 30, flexDirection: 'row', height: '85%'}}>
				        <Image style={{width: 35, height: 35, marginLeft: '5%', marginTop: '2%'}} source={require('../assets/google_logo.png')} />
				        <Text style={{fontSize: 16, color:'#1a233c', marginLeft: '15%', marginTop: '3%'}}>Login with Google</Text>
			        </View>
                </TouchableOpacity>
                <Loader />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'stretch',
      backgroundColor: '#FFF',
      padding: '5%'
    }
});