import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class PlacesContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Places</Text>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 52.379189,
            longitude: 4.899431,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});
