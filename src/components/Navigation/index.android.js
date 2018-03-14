
/**
 * 
 */

import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Tab navigation
import MenuTabs from '../../routes/tabs.android'

// Screens
import LoginScreen from '../../screens/Login/index.android'

const MyLoginScreen = ({ navigation }) => (
  <LoginScreen banner={'Login'} navigation={navigation} />
)

MyLoginScreen.navigationOptions = {
  drawerLabel: 'Login',
  title: 'Login',
  drawerIcon: ({ tintColor }) => (
    <Ionicons
      name={'ios-contact'}
      size={24}
      style={{ color: tintColor }}
    />
  )
}

const LoginStack = StackNavigator({
  Login: {
    screen: MyLoginScreen,
    path: '/login',
    navigationOptions: {
      title: 'Login'
    }
  }
})

const Drawer = DrawerNavigator(
  {
    Home: { screen: MenuTabs },
    Login: { screen: LoginStack }
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  }
)

export default Drawer;
