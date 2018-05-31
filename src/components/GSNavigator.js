import { createStackNavigator } from 'react-navigation';
import Login from '../containers/Login';
import Home from './Home';
import ProfileDetails from '../containers/ProfileDetails';
import PointsTable from '../containers/PointsTable';
import NewsFeeds from '../containers/NewsFeeds';

export default RootStack = createStackNavigator({
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home
    },
    Profile: {
      screen: ProfileDetails
    },
    Points: {
      screen: PointsTable
    },
    News: {
      screen: NewsFeeds
    }
});