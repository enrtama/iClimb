import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Login extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: 'Login',
    title: 'Login',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
    )
  })

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
