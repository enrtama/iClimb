import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Platform, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/Home/index.android'
import ChatScreen from '../screens/Chat/index.android'
import FavoritesScreen from '../screens/Favorites/index.android'
import PlacesScreen from '../screens/Places/index.android'

const MyHomeScreen = ({ navigation }) => (
  <HomeScreen banner={'Home'} navigation={navigation} />
)

const MyChatScreen = ({ navigation }) => (
  <ChatScreen banner={'Chat'} navigation={navigation} />
)

const MyFavoritesScreen = ({ navigation }) => (
  <FavoritesScreen banner={'Favorites'} navigation={navigation} />
)

const MyPlacesScreen = ({ navigation }) => (
  <PlacesScreen banner={'Places'} navigation={navigation} />
)

const MainStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: ({navigation}) => ({
      title: 'Welcome',
    })
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

const ChatStack = StackNavigator({
  Chat: {
    screen: MyChatScreen,
    path: '/chat',
    navigationOptions: {
      title: 'Chats'
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

const FavoritesStack = StackNavigator({
  Favorites: {
    screen: MyFavoritesScreen,
    path: '/favorites',
    navigationOptions: {
      title: 'Favorites'
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

const PlacesStack = StackNavigator({
  Places: {
    screen: MyPlacesScreen,
    path: '/places',
    navigationOptions: {
      title: 'Places'
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

const MenuTabs = TabNavigator(
  {
    Home: {
      screen: MainStack,
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
      screen: ChatStack,
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
    },
    Favorites: {
      screen: FavoritesStack,
      path: 'favorites',
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-star' : 'ios-star-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Places: {
      screen: PlacesStack,
      path: 'places',
      navigationOptions: {
        tabBarLabel: 'Places',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-pin' : 'ios-pin-outline'}
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

export default MenuTabs;
