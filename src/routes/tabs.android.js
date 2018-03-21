
/**
 *
 */

import React from 'react';
import { TabNavigator, StackNavigator, withNavigation } from 'react-navigation';
import { Platform, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Containers
import HomeContainer from '../containers/Home/index.android'
import ChatContainer from '../containers/Chat/index.android'
import FavoritesContainer from '../containers/Favorites/index.android'
import PlacesContainer from '../containers/Places/index.android'
import EventContainer from '../containers/Event/index.android'

const MyHomeContainer = ({ navigation }) => (
  <HomeContainer banner={'Home'} navigation={navigation} />
)

const MyChatContainer = ({ navigation }) => (
  <ChatContainer banner={'Chat'} navigation={navigation} />
)

const MyFavoritesContainer = ({ navigation }) => (
  <FavoritesContainer banner={'Favorites'} navigation={navigation} />
)

const MyPlacesContainer = ({ navigation }) => (
  <PlacesContainer banner={'Places'} navigation={navigation} />
)

const MyEventContainer = ({ navigation }) => (
  <EventContainer banner={'Event'} navigation={navigation} />
)

const MainStack = StackNavigator({
  Home: {
    screen: MyHomeContainer,
    path: '/',
    navigationOptions: ({navigation}) => ({
      title: 'Welcome',
    })
  },
  EventItem: {
    screen: MyEventContainer,
    path: '/event/:id',
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: {paddingLeft: 20, paddingRight: 20},
      headerRight: <TouchableOpacity onPress={() => { navigation.goBack(null)}}>
                     <Ionicons
                       name={'ios-arrow-back'}
                       size={26}
                       style={{color:'black'}}/></TouchableOpacity>
    })
  }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {paddingLeft: 20},
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>
                <Ionicons
                  name={'ios-menu'}
                  size={26}
                  style={{color:'black'}}/></Text>
  })
})

const ChatStack = StackNavigator({
  Chat: {
    screen: MyChatContainer,
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
    screen: MyFavoritesContainer,
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
    screen: MyPlacesContainer,
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
