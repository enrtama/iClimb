/**
 *
 */

import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserActions from '../../redux/user'

import SidebarHeader from './sidebarheader.android'

class SidebarContainer extends React.Component {

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillMount() {
  }

  /**
   * navigateToScreen - description
   *
   * @param  {type} route description
   * @return {type}       description
   */
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  /**
   *
   */
  signout = () => () => {
    this.props.signout()
  }

  render () {
    const { auth } = this.props;
    const { isAuthenticated, user } = auth;
    return (
      <View style={styles.container}>
        <SidebarHeader user={user} isAuthenticated={isAuthenticated}/>
        {isAuthenticated ?
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>Profile</Text>
            <TouchableOpacity style={styles.navSectionStyle}>
              <Ionicons
                name={'ios-settings'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyle} onPress={this.navigateToScreen('')}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navSectionStyle}>
              <Ionicons
                name={'ios-key'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyle} onPress={this.navigateToScreen('ResetPassword')}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navSectionStyle}>
              <Ionicons
                name={'ios-close-circle'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyleSignout} onPress={this.signout()}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        :
        <ScrollView>
          <View>
            <TouchableOpacity style={styles.navSectionStyle}>
              <Ionicons
                name={'ios-lock'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyle} onPress={this.navigateToScreen('Login')}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navSectionStyle}>
              <Ionicons
                name={'ios-person-add'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyle} onPress={this.navigateToScreen('Signup')}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  navItemStyle: {
    padding: 10,
    color: '#4f4f4f',
    fontWeight: 'bold'
  },
  navItemStyleSignout: {
    padding: 10,
    color: '#e91e63',
    fontWeight: 'bold'
  },
  navSectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
  sectionHeadingStyle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  icon: {
    color: 'black',
    width: 25
  },
  footerContainer: {
    padding: 15
  }
});

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapStateToDispatch = dispatch => ({
  signout: () => dispatch(UserActions.signout())
})

export default connect(mapStateToProps, mapStateToDispatch)(SidebarContainer)
