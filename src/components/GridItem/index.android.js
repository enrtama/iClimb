/**
 *
 */

import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class GridItem extends React.Component {

  /**
   * handleClick - description
   *
   * @param  {type} title description
   * @return {type}       description
   */
  handleClick(title) {
    this.props.navigation.push('FavoritesFilter', { title: title})
  }
  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { title, icon } = this.props;
    return (
        <TouchableOpacity onPress={() => this.handleClick(title)}>
          <Image
            style={styles.icon}
            source={icon} />
          <Text style={styles.paragraph}>{title}</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },
  paragraph: {
    textAlign: 'center'
  }
});
