/**
 *
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Grid, Col } from "react-native-easy-grid";

import GridItem from '../GridItem/index.android';

export default class GridList extends React.Component {

  render() {
    const { items } = this.props;
    return (
      <Grid style={styles.grid}>
        <Col>
          <GridItem title={items[0]} icon={require("../../../assets/menu1.png")}/>
          <GridItem title={items[1]} icon={require("../../../assets/menu2.png")}/>
        </Col>
        <Col>
          <GridItem title={items[2]} icon={require("../../../assets/menu3.png")}/>
          <GridItem title={items[3]} icon={require("../../../assets/menu4.png")}/>
        </Col>
        <Col>
          <GridItem title={items[4]} icon={require("../../../assets/menu5.png")}/>
          <GridItem title={items[5]} icon={require("../../../assets/menu6.png")}/>
        </Col>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1
  }
});
