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
    const { user, isAuthenticated } = this.props;
    return (
      <View style={styles.container}>
        {isAuthenticated && user ?
        <View style={styles.userInfo}>
          <Image style={styles.backgroundImage} source={require('../../../assets/bouldering-bg.png')} />
          <Thumbnail large style={styles.thumbnail} source={{uri: user.avatar}} />
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.username}>{user.displayName}</Text>
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
    padding: 20
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
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
