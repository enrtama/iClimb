
/**
 *
 */

import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Tab navigation
import MenuTabs from '../../routes/tabs.android'

// Screens
import LoginScreen from '../../containers/Login/index.android'

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
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {paddingLeft: 20},
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}><Ionicons
                name={'ios-menu'}
                size={26}
                style={{color:'black'}}/></Text>
  })
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
