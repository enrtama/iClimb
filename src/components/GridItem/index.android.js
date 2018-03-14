/**
 *
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Row } from "react-native-easy-grid";

export default class GridItem extends React.Component {

  render() {
    const { title } = this.props;
    return (
        <Row style={styles.row}><Text>{title}</Text></Row>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'lightblue'
  }
});
