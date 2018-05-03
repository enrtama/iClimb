/**
 *
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Grid, Col, Row } from "react-native-easy-grid";

import GridItem from '../GridItem/index.android';

export default class GridList extends React.Component {

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { items, navigation } = this.props;
    return (
      <Grid style={styles.grid}>
        <Col>
          <Row style={styles.row}><GridItem title={items[0]} icon={require('../../../assets/menu1.png')} navigation={navigation}/></Row>
          <Row style={styles.row}><GridItem title={items[1]} icon={require('../../../assets/menu2.png')} navigation={navigation}/></Row>
        </Col>
        <Col>
          <Row style={styles.row}><GridItem title={items[2]} icon={require('../../../assets/menu3.png')} navigation={navigation}/></Row>
          <Row style={styles.row}><GridItem title={items[3]} icon={require('../../../assets/menu4.png')} navigation={navigation}/></Row>
        </Col>
        <Col>
          <Row style={styles.row}><GridItem title={items[4]} icon={require('../../../assets/menu5.png')} navigation={navigation}/></Row>
          <Row style={styles.row}><GridItem title={items[5]} icon={require('../../../assets/menu6.png')} navigation={navigation}/></Row>
        </Col>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    justifyContent:'center'
  }
})
