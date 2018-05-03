/**
 *
 */

import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserActions from '../../redux/user'

import SidebarHeader from './sidebarheader.android'

class SidebarContainer extends React.Component {

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
   * signout - description
   *
   * @return {type}  description
   */
  signout() {
    this.navigateToScreen('Login')()
    this.props.signout()
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render () {
    const { auth } = this.props;
    const { isAuthenticated, user, avatar } = auth;

    return (
      <View style={styles.container}>
        <SidebarHeader user={user} avatar={avatar} isAuthenticated={isAuthenticated}/>
        {isAuthenticated ?
        <ScrollView>
          <View>
            <Button transparent block style={styles.navSectionStyle} onPress={this.navigateToScreen('HomeTab')}>
              <Ionicons
                name={'ios-home'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyle}>Home</Text>
            </Button>
            <Text style={styles.sectionHeadingStyle}>PROFILE</Text>
            <Button transparent block style={styles.navSectionStyle} onPress={this.navigateToScreen('EditProfile')}>
              <Ionicons
                name={'ios-settings'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyle}>Edit profile</Text>
            </Button>
            <Button transparent block style={styles.navSectionStyle} onPress={this.navigateToScreen('ResetPassword')}>
              <Ionicons
                name={'ios-key'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyle}>Reset Password</Text>
            </Button>
            <Button transparent block style={styles.navSectionStyle} onPress={() => this.signout()}>
              <Ionicons
                name={'ios-close-circle'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyleSignout}>Sign out</Text>
            </Button>
          </View>
        </ScrollView>
        :
        <ScrollView>
          <View>
            <Button transparent block style={styles.navSectionStyle} onPress={this.navigateToScreen('Login')}>
              <Ionicons
                name={'ios-lock'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyleAuth}>Login</Text>
            </Button>
            <Button transparent block style={styles.navSectionStyle} onPress={this.navigateToScreen('Signup')}>
              <Ionicons
                name={'ios-person-add'}
                size={24}
                style={styles.icon}/><Text style={styles.navItemStyleAuth}>Sign up</Text>
            </Button>
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
  navItemStyleAuth: {
    paddingVertical: 20,
    paddingHorizontal: 10,
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
    paddingLeft: 15
  },
  sectionHeadingStyle: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    fontSize: 15,
    fontWeight: 'bold'
  },
  icon: {
    color: 'black',
    width: 45,
    paddingHorizontal: 10
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
