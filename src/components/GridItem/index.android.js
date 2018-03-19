/**
 *
 */

import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Row } from "react-native-easy-grid";

export default class GridItem extends React.Component {

  render() {
    const { title, icon } = this.props;
    return (
        <Row style={styles.row}>
          <Image
            style={styles.icon}
            source={icon} />
          <Text style={styles.paragraph}>{title}</Text>
        </Row>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 2,
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
  },
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
