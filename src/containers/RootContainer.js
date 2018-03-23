/**
 *
 */

import Expo from 'expo';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase';

import StartupActions from '../redux/startup'
import { StyleSheet, View } from 'react-native';
import { Spinner, Root } from 'native-base';

import { FIREBASE } from '../constants'
import HomeScreen from '../containers/Home/index.android'
import Navigation from '../components/Navigation/index.android'

firebase.initializeApp({
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  databaseURL: FIREBASE.DATABASE_URL,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSAGING_SENDER_ID
});

class RootContainer extends React.Component {
  state = {
    fontLoaded: false
  }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillMount() {

  }

  /**
   * async componentDidMount - description
   *
   * @return {type}  description
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
      <View style={styles.container}>
        <Root>
          <Navigation />
        </Root>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spinner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToDispatch = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapStateToDispatch)(RootContainer)
