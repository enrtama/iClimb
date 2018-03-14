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
          <GridItem title={items[0]} />
          <GridItem title={items[1]} />
        </Col>
        <Col>
          <GridItem title={items[2]} />
          <GridItem title={items[3]} />
        </Col>
        <Col>
          <GridItem title={items[4]} />
          <GridItem title={items[5]} />
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
