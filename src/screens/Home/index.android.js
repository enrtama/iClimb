import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.main}>
        <Button onPress={() => navigation.navigate('DrawerOpen')} title="Open drawer" />
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
