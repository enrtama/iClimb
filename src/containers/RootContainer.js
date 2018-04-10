/**
 *
 */

import Expo from 'expo';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase';

import StartupActions from '../redux/startup'
import { StyleSheet, View, Text } from 'react-native';
import { Spinner, Root } from 'native-base';

import HomeScreen from '../containers/Home/index.android'
import Navigation from '../components/Navigation/index.android'

class RootContainer extends React.Component {
  state = {
    fontLoaded: false
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
