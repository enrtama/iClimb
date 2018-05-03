
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GridList from '../../components/GridList/index.android'
import { SPORT_MODALITY } from '../../constants'

export default class FavoritesContainer extends React.Component {

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const titles = Object.values(SPORT_MODALITY)
    return (
      <View style={styles.main}>
        <GridList items={titles} navigation={this.props.navigation}/>
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
