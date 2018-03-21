
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class Map extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <MapView style={styles.map}
        initialRegion={{
          latitude: item.coordinate.latitude,
          longitude: item.coordinate.longitude,
          latitudeDelta: 0.0992,
          longitudeDelta: 0.0491
        }}>
          <Marker
            key={item.id}
            coordinate={item.coordinate}
            title={item.title}
            description={item.description}
            image={require('../../../assets/shoe-pin.png')}
          />
        </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});
