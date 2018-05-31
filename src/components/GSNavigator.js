import { createStackNavigator } from 'react-navigation';
import Login from '../containers/Login';
import Home from './Home';


export default RootStack = createStackNavigator({
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home
    }
});