import Expo from 'expo';
import React from 'react';
import { AppRegistry } from "react-native";
import { StyleSheet, View, Text } from 'react-native';
import { Spinner } from 'native-base';

// Screens
import HomeScreen from './src/screens/Home/index.android.js'

import Navigation from './src/components/Navigation/index.android.js'

class App extends React.Component {
  state = {fontLoaded: false}
  /**
   *
   */
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <View style={styles.spinner}><Spinner /></View>
    }
    return (
      <Navigation />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
