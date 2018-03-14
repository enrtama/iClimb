
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

import I18n from '../../i18n/index.js';

import GridList from '../../components/GridList/index.android'

export default class HomeScreen extends React.Component {

  /**
   * async componentWillMount - description
   *
   * @return {type}  description
   */
  async componentWillMount() {
    await I18n.initAsync();
  }

  render() {
    const { navigation, banner } = this.props;
    const titles = ['Gym Bouldering', 'Gym Routes', 'Outdoor Bouldering', 'Ice Climbing', 'Sport Climbing', 'Traditional Climbing']
    return (
      <View style={styles.main}>
        <Text>{I18n.t('greeting')}</Text>
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
