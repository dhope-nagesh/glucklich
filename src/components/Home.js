import React, { Component } from 'react';
import { AppService } from '../services/ApiServices';
import {View, Text, Image, StyleSheet, DrawerLayoutAndroid, TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import ProfileDetails from '../containers/ProfileDetails';
import PointsTable from '../containers/PointsTable';
import NewsFeeds from '../containers/NewsFeeds';
import Spinner from './Spinner';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.navigation.state.params,
            imagePath: "",
            username: "",
            active: false
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    componentDidMount = () => {
        AppService.getUserProfile(this.state.userInfo.token)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((responseJson) => {
            this.setState({
                imagePath: responseJson.image_path,
                username: responseJson.user.username,
                active: true
            })
            console.log(responseJson)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    onPressHandler = (routeName) => {
        if(routeName === 'Logout') {
            try {
                AsyncStorage.clear();
                // this.props.navigation.state.params.onNavigateBack();
                this.props.navigation.goBack();
            } catch (error) {

            }
        } else {
            this.props.navigation.navigate(routeName);
        }
    }

     
    render() {
        const navigationView = (
            <View style={{
                flex: 1,
                padding: '10%'}}>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.onPressHandler('Profile')}>
                    <Image style={{width: 40, height: 40}} source={require('../assets/admin-icon.jpeg')} />
                    <Text style={styles.textContainer}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.onPressHandler('Points')}>
                    <Image style={{width: 40, height: 40}} source={require('../assets/points-table.png')} />
                    <Text style={styles.textContainer}>Points Table</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.onPressHandler('News')}>
                <Image style={{width: 40, height: 40}} source={require('../assets/news-feed.png')} />
                    <Text style={styles.textContainer}>News Feeds</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.onPressHandler('Logout')}>
                <Image style={{width: 40, height: 40}} source={require('../assets/news-feed.png')} />
                    <Text style={styles.textContainer}>Logout</Text>
                </TouchableOpacity>
            </View>
          );
        const drawer = (
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
        return ( 
            this.state.active? drawer: (<Spinner />)
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    drawerContainer: {
        flex: 1, 
        backgroundColor: '#4d789a', 
        padding: '10%', 
        fontWeight: '500', 
        fontSize: 18,
        color: '#f3762d'
    },
    textContainer: {
        fontSize: 18,
        color: '#000',
        padding: '3%',
        paddingBottom: '10%'
    }
});