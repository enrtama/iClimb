/**
 *
 */

import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SidebarHeader extends React.Component {
  render () {
    const { user, isAuthenticated } = this.props;
    return (
      <View style={styles.container}>
        <Ionicons
          name={'ios-contact'}
          size={128}
          style={{color:'white'}}/>
          {isAuthenticated && user ?
          <View>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.username}>{user.displayName}</Text>
          </View>
          : <Text style={styles.email}>Not Logged in yet</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#e91e63',
    marginTop: 4
  },
  email: {
    color: 'white',
    fontWeight: 'bold'
  },
  username: {
    color: 'white'
  }
})

export default SidebarHeader;
