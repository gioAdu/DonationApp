import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import Home from '../screens/Home/Home';
import DonationItemPage from '../screens/donationItem/DonationItemPage';
import Login from '../screens/login/Login';
import Register from '../screens/Register/Register';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Register} component={Register} />

      <Stack.Screen
        name={Routes.DonationItemPage}
        component={DonationItemPage}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
