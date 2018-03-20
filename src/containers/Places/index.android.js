import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class PlacesContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Places</Text>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 52.383477,
            longitude: 4.929267,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
          <Marker
            coordinate={{latitude: 52.383477,longitude: 4.929267}}
            title={"Monk"}
            description={"Bouldering Gym"}
            image={require('../../../assets/shoe-pin.png')}/>
          </MapView>
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
