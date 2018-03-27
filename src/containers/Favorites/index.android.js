
/**
 *
 */
  
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GridList from '../../components/GridList/index.android'

export default class FavoritesContainer extends React.Component {
  render() {
    const titles = ['Gym Bouldering', 'Gym Routes', 'Outdoor Bouldering', 'Ice Climbing', 'Sport Climbing', 'Traditional Climbing']
    return (
      <View style={styles.main}>
        <GridList items={titles} />
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
