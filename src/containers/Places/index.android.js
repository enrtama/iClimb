
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import MapView, { Marker } from 'react-native-maps';

import PlacesActions from '../../redux/places'

class PlacesContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props)
    this.state = {
      markers: []
    }
  }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillMount() {
    const { markers } = this.props;
    this.props.getMarkers()
  }

  /**
   * componentWillReceiveProps - description
   *
   * @param  {type} nextProps description
   * @return {type}           description
   */
  componentWillReceiveProps(nextProps) {
    const { markers } = nextProps;
    this.setState({markers})
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 52.383477,
            longitude: 4.929267,
            latitudeDelta: 0.0992,
            longitudeDelta: 0.0491
          }}>
          {this.state.markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              image={require('../../../assets/shoe-pin.png')}
            />
          ))}
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

const mapStateToProps = (state) => {
  return {
    markers: state.places.markers,
  }
}

const mapStateToDispatch = dispatch => ({
  getMarkers: () => dispatch(PlacesActions.getMarkers())
})

export default connect(mapStateToProps, mapStateToDispatch)(PlacesContainer)
