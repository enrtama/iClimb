import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LoginContainer extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>Login caca</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});
