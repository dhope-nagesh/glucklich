import React, { Component } from 'react';
import { AppService } from '../services/ApiServices';
import { Container, Content } from 'native-base';
import {View, Text, Image, BackHandler, ToastAndroid, StyleSheet, DrawerLayoutAndroid, TouchableOpacity, AsyncStorage } from 'react-native';
import ProfileDetails from '../containers/ProfileDetails';
import PointsTable from '../containers/PointsTable';
import NewsFeed from '../containers/NewsFeed';
import Spinner from './Spinner';
import index from 'react-native-simple-auth';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.navigation.state.params,
            imagePath: "",
            username: "",
            active: false,
            userDetails: "",
            pointsDetails: "",
            quarterDetails: [],
            eventDetails: []
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Feeds',
        headerLeft: null,
        gesturesEnabled: false,
        headerTitleStyle: {
            fontSize: 18,
            width: '100%'
        }
    });

    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return false;
    }
    

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        AppService.getUserProfile(this.state.userInfo.token)
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            this.setState({
                imagePath: responseJson.image_path,
                username: responseJson.user.username,
                active: true,
                userDetails: responseJson
            })
        })
        .catch((error) => {
            console.log(error)
        })

        // getPointsDetails
        AppService.getPointsDetails()
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            this.setState({
                pointsDetails: responseJson
            })
            console.log(responseJson, "test points")
        })
        .catch((error) => {
            console.log(error)
        })

        // getQuarterDetails
        AppService.getQuarterDetails()
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            this.setState({
                quarterDetails: responseJson
            })
            console.log(responseJson, "quarter points")
        })
        .catch((error) => {
            console.log(error)
        })

        // getEventDetails
        AppService.getEventDetails()
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            this.setState({
                eventDetails: responseJson
            })
            console.log(responseJson, "events")
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
            const props = {"userData": this.state.userDetails, "points": this.state.pointsDetails, "quarderDetails": this.state.quarterDetails, 
            "events": this.state.eventDetails}
            console.log(routeName, 'The rount')
            this.props.navigation.navigate(routeName, props);
        }
    }

     
    render() {
        const userDetails = this.state.userDetails
        const imagePath = userDetails?{ uri: userDetails.user.image_path }: require('../assets/profile-icon.jpg')
        const navigationView = (
            <View>
                <TouchableOpacity style={{flexDirection: 'row', padding: '7%'}} onPress={() => this.onPressHandler('Profile')}>
                    <Image style={{width: 30, height: 30, borderRadius: 15}} source={imagePath} />
                    <Text style={styles.textContainer}>Profile</Text>
                </TouchableOpacity>
                <View style={{ borderWidth: 0.3, borderBottomColor: 'lightgrey', padding: 0 }} ></View>
                <TouchableOpacity style={{flexDirection: 'row', padding: '7%'}} onPress={() => this.onPressHandler('Points')}>
                    <Image style={{width: 30, height: 30}} source={require('../assets/points-table.png')} />
                    <Text style={styles.textContainer}>Points Table</Text>
                </TouchableOpacity>
                <View style={{ borderWidth: 0.3, borderBottomColor: 'lightgrey' }} ></View>
                <TouchableOpacity style={{flexDirection: 'row', padding: '7%'}} onPress={() => this.onPressHandler('QuarterDetails')}>
                    <Image style={{width: 30, height: 30}} source={require('../assets/quater.png')} />
                    <Text style={styles.textContainer}>Quaters</Text>
                </TouchableOpacity>
                <View style={{ borderWidth: 0.3, borderBottomColor: 'lightgrey' }} ></View>
                <TouchableOpacity style={{flexDirection: 'row', padding: '7%'}} onPress={() => this.onPressHandler('Logout')}>
                    <Image style={{width: 30, height: 30}} source={require('../assets/logout-icon.jpeg')} />
                    <Text style={styles.textContainer}>Logout</Text>
                </TouchableOpacity>
            </View>
          );
          const renderFeeds = this.state.eventDetails.map((feed, index) => {
              console.log(feed, index, 'dfghjk')
              return <NewsFeed feed={feed} key={index} />
          })
        const drawer = (
            <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
                <Container style={styles.container}>
                <Content>
                    { renderFeeds }
                </Content>
                </Container>
            </DrawerLayoutAndroid>
        )
        return ( 
            this.state.active? drawer: (<Spinner />)
        )
    }
}


const styles = StyleSheet.create({
    container: {
     
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
        paddingLeft: '12%'
    }
});