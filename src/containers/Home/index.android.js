/**
 *
 */

import React from 'react'
import { StyleSheet, View, Text, Picker, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Fab } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MAP_DEFAULT } from '../../constants'

import i18nActions from '../../redux/i18n'
import FavoritesActions from '../../redux/favorites'

import I18n from '../../i18n/index'
import GooglePlacesSearch from '../../components/GooglePlacesSearch/index.android'
import SpinnerLoader from '../../components/SpinnerLoader/index.android'

class HomeContainer extends React.Component {

  state = {
    events: [],
    markers: [],
    coordinates: {
      lat: MAP_DEFAULT.LATITUDE,
      lng: MAP_DEFAULT.LONGITUDE
    },
    locationId: null
  }

  /**
   * async componentWillMount - description
   *
   * @return {type}  description
   */
  async componentWillMount() {
    await I18n.initAsync();
    this.props.getEvents();
  }

  /**
   * componentWillReceiveProps - description
   *
   * @param  {type} nextProps description
   * @return {type}           description
   */
  componentWillReceiveProps(nextProps) {
    const { events } = nextProps;
    const markers = events.map((event,key) => {
      return {
        id: event.key,
        title: event.title,
        description: event.description,
        coordinate: event.geocode
      }
    })
    this.setState({events, markers})
  }

  /**
   * languageChanged - description
   *
   * @param  {type} changeLanguage description
   * @param  {type} setParams      description
   * @param  {type} newLang        description
   * @return {type}                description
   */
  languageChanged = (changeLanguage, setParams) => (newLang) => {
    changeLanguage(newLang)
    setParams({
      title: I18n.t('greeting', { locale: newLang })
    })
  }

  /**
   * setLocation - description
   *
   * @param  {type} value description
   * @return {type}       description
   */
  setLocation(location, geocode) {
    this.setState({coordinates: geocode, locationId: location.id});
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { navigation, banner, language, changeLanguage } = this.props;
    const { setParams } = this.props.navigation;
    const { events, markers, coordinates } = this.state;

    const languageOptions = Object.keys(I18n.translations).map((lang, i) => {
      return (
        <Picker.Item key={ i }
                     label={ I18n.translations[lang].id }
                     value={ lang } />)
    })

    console.log(coordinates);

    return (
      <View style={styles.container}>
        <GooglePlacesSearch callback={this.setLocation.bind(this)} title="Search for a city..." currentLocation={true} range="(cities)"/>
        <Fab
          active={false}
          direction="up"
          style={styles.fab}
          containerStyle={{bottom: 20}}
          position="bottomRight"
          onPress={() => navigation.navigate('AddEvent')}>
          <Ionicons name="ios-add" />
        </Fab>
        <MapView style={styles.map}
          showsUserLocation={true}
          loadingEnabled={true}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: MAP_DEFAULT.LATITUDE,
            longitude: MAP_DEFAULT.LONGITUDE,
            latitudeDelta: 0.1000,
            longitudeDelta: 0.0591
          }}
          region={{
            latitude: coordinates.lat,
            longitude: coordinates.lng,
            latitudeDelta: 0.1000,
            longitudeDelta: 0.0591
          }}>
          {markers && markers.length > 0 && this.state.markers.map(marker => (
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
  initialText: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 10,
    marginLeft: 10,
  },
  list: {
    marginVertical: 50
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 15
  },
  fab: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#007bff',
    zIndex: 3
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

const mapStateToProps = (state) => {
  return {
    language: state.i18n.language,
    events: state.favorites.events
  }
}

const mapStateToDispatch = dispatch => ({
  changeLanguage: (newLang) => dispatch(i18nActions.changeLanguage(newLang)),
  getEvents: (data) => dispatch(FavoritesActions.getEvents(data))
})

export default connect(mapStateToProps, mapStateToDispatch)(HomeContainer)
