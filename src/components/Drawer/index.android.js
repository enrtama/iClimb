import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator, DrawerView } from 'react-navigation';

import LoginScreen from '../../screens/Login/index.android.js'
import HomeScreen from '../../screens/Home/index.android.js'

const Drawer = DrawerNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen }
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  }
);

export default Drawer;
