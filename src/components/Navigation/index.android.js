import React, { Component } from 'react'
import { SafeAreaView, TabNavigator, NavigationScreenProp, StackNavigator } from 'react-navigation';
import { StyleSheet, Platform, ScrollView, View, Button, Text } from 'react-native';
import { Footer, FooterTab, Right, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Drawer Navigator
import DrawerNavigation from '../Drawer/index.android.js'

// Screens
import HomeScreen from '../../screens/Home/index.android.js'
import ChatScreen from '../../screens/Chat/index.android.js'

const MyHomeScreen = ({ navigation }) => (
  <HomeScreen banner={'Home'} navigation={navigation} />
)

const MyChatScreen = ({ navigation }) => (
  <ChatScreen banner={'Chat'} navigation={navigation} />
)

const MainTab = StackNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: ({navigation}) => ({
      title: 'Welcome',
    })
  },
  DrawerStack: {
    screen: DrawerNavigation
  },
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}><Ionicons
                name={'ios-menu'}
                size={26}
                style={{color:'black'}}/></Text>
  })
})

const ChatTab = StackNavigator({
  Chat: {
    screen: MyChatScreen,
    path: '/',
    navigationOptions: {
      title: 'Chats'
    }
  }
})

const SimpleTabs = TabNavigator(
  {
    Home: {
      screen: MainTab,
      path: '',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Chat: {
      screen: ChatTab,
      path: 'chat',
      navigationOptions: {
        tabBarLabel: 'Chats',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-people' : 'ios-people-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    lazy: true,
    removeClippedSubviews: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
    }
  }
)

type NavigationProps = {
  navigation: NavigationScreenProp<*>,
}

class Navigation extends React.Component<NavigationProps> {
  render() {
    return <SimpleTabs navigation={this.props.navigation} />;
  }
}

export default Navigation;
