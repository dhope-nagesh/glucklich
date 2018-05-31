import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as simpleAuthProviders from 'react-native-simple-auth';
import googleSecrets from '../constants/secrets'

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
                <Button title="Login with Google" style={{ width: 400 }} onPress={this.onLogin}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'stretch',
      margin: 20,
    }
});