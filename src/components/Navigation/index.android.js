
/**
 *
 */

import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Navigation
import MenuTabs from '../../routes/tabs.android'
import Sidebar from './sidebar.android'

// Containers
import LoginContainer from '../../containers/Login/index.android'
import ResetPasswordContainer from '../../containers/ResetPassword/index.android'
import SignupContainer from '../../containers/Signup/index.android'

const MyLoginContainer = ({ navigation }) => (
  <LoginContainer banner={'Login'} navigation={navigation} />
)

const MyResetPasswordContainer = ({ navigation }) => (
  <ResetPasswordContainer banner={'Reset Password'} navigation={navigation} />
)

const MySignupContainer = ({ navigation }) => (
  <SignupContainer banner={'Sign up'} navigation={navigation} />
)

MyLoginContainer.navigationOptions = {
  drawerLabel: 'Login',
  title: 'Login'
}

MyResetPasswordContainer.navigationOptions = {
  drawerLabel: 'Reset Password',
  title: 'Reset Password'
}

MySignupContainer.navigationOptions = {
  drawerLabel: 'Sign up',
  title: 'Sign up'
}

const LoginStack = StackNavigator({
  Login: {
    screen: MyLoginContainer,
    path: '/login',
    navigationOptions: {
      title: 'Login'
    }
  }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {paddingRight: 20},
    headerRight: <Text onPress={() => navigation.navigate('DrawerOpen')}><Ionicons
                name={'ios-menu'}
                size={26}
                style={{color:'black'}}/></Text>
  })
})

const SignupStack = StackNavigator({
  Signup: {
    screen: MySignupContainer,
    path: '/signup',
    navigationOptions: {
      title: 'Sign up'
    }
  }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {paddingRight: 20},
    headerRight: <Text onPress={() => navigation.navigate('DrawerOpen')}><Ionicons
                name={'ios-menu'}
                size={26}
                style={{color:'black'}}/></Text>
  })
})

const ResetPasswordStack = StackNavigator({
  ResetPassword: {
    screen: MyResetPasswordContainer,
    path: '/resetPassword',
    navigationOptions: {
      title: 'Reset Password'
    }
  }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {paddingRight: 20},
    headerRight: <Text onPress={() => navigation.navigate('DrawerOpen')}><Ionicons
                name={'ios-menu'}
                size={26}
                style={{color:'black'}}/></Text>
  })
})

const Drawer = DrawerNavigator(
  {
    Home: { screen: MenuTabs },
    Login: { screen: LoginStack },
    Signup: { screen: SignupStack },
    ResetPassword: { screen: ResetPasswordStack }
  },
  {
    contentComponent: Sidebar,
    drawerPosition: 'right',
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  }
)

export default Drawer;
