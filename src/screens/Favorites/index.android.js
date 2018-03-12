import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';

export default class FavoritesScreen extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>Favorites</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});
