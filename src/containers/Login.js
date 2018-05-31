import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';
import * as simpleAuthProviders from 'react-native-simple-auth';
import googleSecrets from '../constants/secrets';
import { authService } from '../services/ApiServices';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };
    componentDidMount = () => {
       try {
        AsyncStorage.getItem('@GLStore:userInfo', (error, result) => {
            const userInfo = JSON.parse(result);
            this.props.navigation.navigate('Home', { userInfo: userInfo }) 
        });
      } catch (error) {
       console.log(error)
      }
    }
    onLogin = (e) => {
        simpleAuthProviders['google'](googleSecrets)
        .then((info) => {
            loginDetails = {
                email: info.user.email,
                first_name: info.user.given_name,
                social_login_image_path: info.user.picture
            }
            authService.login(loginDetails)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                try {
                    AsyncStorage.setItem('@GLStore:userInfo', JSON.stringify(responseJson));
                    this.props.navigation.navigate('Home', { title: `${info.user.given_name} ${info.user.family_name}`, info })
                  } catch (error) {
                    console.log(error, 'error')
                  }
            })
            .catch((error) => {
                console.error(error);
            });
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
