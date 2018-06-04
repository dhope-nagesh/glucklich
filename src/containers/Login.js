import React, { Component } from 'react';
import googleSecrets from '../constants/secrets'
import Loader from '../components/Loader';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import * as simpleAuthProviders from 'react-native-simple-auth';
import { authService } from '../services/ApiServices';
import Spinner from '../components/Spinner';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
    static navigationOptions = {
        header: null
    };
    componentDidMount = () => {
        this.checkAsyncStore()
    }

    handleOnNavigateBack = () => {
        console.log('come')
    };

    checkAsyncStore = () => {
        console.log('came back')
        try {
          AsyncStorage.getItem('@GLStore:userInfo', (error, result) => {
             if (result !== null) {
                 const userInfo = JSON.parse(result);
                 this.props.navigation.navigate('Home', { onNavigateBack: this.handleOnNavigateBack, userInfo: userInfo, }) 
             } else {
                 this.setState({
                     active: true
                 })
             }
             
         });
       } catch (error) {
         this.setState({
             active: true
         })
       }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    componentWillMount() {
        console.log('componentWillMount');
    }
    
    
    
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    onLogin = (e) => {
        this.setState({
            active: false
        })
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
                
                try {
                    AsyncStorage.setItem('@GLStore:userInfo', JSON.stringify(responseJson));
                    console.log('dsds')
                    this.props.navigation.navigate('Home', { userInfo: responseJson })
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
        this.checkAsyncStore();
        return (
            this.state.active ? 
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 60, textAlign: 'center' }}>
                    Glucklich
                </Text>
                <Image style={{marginLeft: '20%'}} source={require('../assets/glucklich-logo.jpeg')} />
                <TouchableOpacity style={{paddingLeft: '3%', height: '10%'}} onPress={this.onLogin}>
                    <View style={{borderColor:'#FFF', borderWidth: 1, backgroundColor: 'lightgrey', borderRadius: 30, flexDirection: 'row', height: '85%'}}>
				        <Image style={{width: 35, height: 35, marginLeft: '5%', marginTop: '2%'}} source={require('../assets/google_logo.png')} />
				        <Text style={{fontSize: 16, color:'#1a233c', marginLeft: '15%', marginTop: '3%'}}>Login with Google</Text>
			        </View>
                </TouchableOpacity>
            </View> : <Spinner />
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
