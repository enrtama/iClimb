
/**
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

const MyCustomMarkerView = (item) => {
  return (
    <View style={styles.callout}>
      <Image source={{uri: item.thumbnail}} style={styles.calloutImage}/>
      <Text style={styles.calloutTitle}>{item.title}</Text>
      <Text>{item.date}</Text>
    </View>
  )
}

export default class Map extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
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
            image={require('../../../assets/shoe-pin.png')}>
            <Callout>
              <MyCustomMarkerView {...item} />
            </Callout>
          </Marker>
        </MapView>
    )
  }
}

Map.propTypes = {
  item: PropTypes.object,
  item: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  callout: {
    width: 230,
    height: 280,
    padding: 15,
    borderRadius: 10
  },
  calloutImage: {
    flex: 1,
    width: 180,
    height: 160
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
