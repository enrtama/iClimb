import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';

export default class ChatScreen extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>Chat</Text>
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
