import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import { AppService } from '../services/ApiServices';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.navigation.state.params,
            imagePath: "",
            username: ""
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    componentDidMount = () => {
        console.log(this.state.userInfo.token, 'token')
        AppService.getUserProfile(this.state.userInfo.token)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((responseJson) => {
            this.setState({
                imagePath: responseJson.image_path,
                username: responseJson.user.username
            })
            console.log(responseJson)
        })
        .catch((error) => {
            console.log(error)
        })
    }
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
                {/* <Text> { this.state.userInfo.token } </Text> */}
                <Image source={{ uri: this.state.imagePath }} style={{width: 200, height: 200, borderRadius: 100}} />
                <Text style={{ fontSize: 20 }}> { this.state.username } </Text>
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