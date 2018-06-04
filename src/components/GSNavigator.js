import { createStackNavigator } from 'react-navigation';
import Login from '../containers/Login';
import Home from './Home';
import ProfileDetails from '../containers/ProfileDetails';
import PointsTable from '../containers/PointsTable';
import NewsFeed from '../containers/NewsFeed';
import QuarterDetails from '../containers/QuarterDetails';

export default RootStack = createStackNavigator({
    Login: {
      screen: Login
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
      screen: NewsFeed
    },
    QuarterDetails: {
      screen: QuarterDetails
    }
});