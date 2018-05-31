import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, DrawerLayoutAndroid, TouchableOpacity, TouchableHighlight } from 'react-native';
import ProfileDetails from '../containers/ProfileDetails';
import PointsTable from '../containers/PointsTable';
import NewsFeeds from '../containers/NewsFeeds';

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
    });

    onPressHandler = (routeName) => {
        this.props.navigation.navigate(routeName);
    }

     
    render() {
        const navigationView = (
            <View style={{
                flex: 1,
                padding: '10%'
            }}>
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