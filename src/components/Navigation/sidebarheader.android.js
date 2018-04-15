/**
 *
 */

import React from 'react';
import firebase from 'firebase';
import Expo from 'expo';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Thumbnail } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SidebarHeader extends React.Component {
  render () {
    const { user, isAuthenticated, avatar } = this.props;
    return (
      <View style={styles.container}>
        {isAuthenticated && user ?
        <View style={styles.userInfoWrapper}>
          <Image style={styles.backgroundImage} source={require('../../../assets/bouldering-bg.png')} />
          <Thumbnail large style={styles.thumbnail} source={{uri: avatar || user.avatar}} />
          <View style={styles.userInfo}>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.username}>{user.displayName}</Text>
          </View>
        </View>
        :
        <View style={styles.userNoAuth}>
          <Ionicons name={'ios-contact'} size={128} style={{color:'white'}}/>
          <Text style={styles.email}>Not Logged in yet</Text>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#e91e63',
    marginTop: 4
  },
  backgroundImage: {
    backgroundColor: 'white',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  userNoAuth: {
    margin: 20
  },
  userInfoWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  userInfo: {
    paddingVertical: 10,
    paddingHorizontal: 45,
    backgroundColor: 'rgba(170,170,170,0.5)'
  },
  email: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  username: {
    color: 'white'
  },
  thumbnail: {
    margin: 10
  }
})

export default SidebarHeader;
