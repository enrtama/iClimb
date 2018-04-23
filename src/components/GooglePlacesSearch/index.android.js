
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyAe5UO9EGXxJEluCtkiEVq0pxpEImRF6n0')

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

const GooglePlacesInput = (props) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={props.title}
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        Geocoder.from(data.description)
          .then(json => {
            props.callback(data, json.results[0].geometry.location)
          })
          .catch(error => console.warn(error));
      }}

    getDefaultValue={() => ''}

    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: 'AIzaSyAe5UO9EGXxJEluCtkiEVq0pxpEImRF6n0',
      language: 'en', // language of the results
      types: props.range // default: 'geocode'
    }}

    styles={{
      textInputContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 50
      },
      textInput: {
        height: 35,
        fontSize: 18
      },
      description: {
        fontWeight: 'bold'
      },
      predefinedPlacesDescription: {
        color: '#1faadb'
      },
      listView: {
        position: 'absolute',
        top: 50,
        backgroundColor: 'white',
        zIndex: 3
      }
    }}

    currentLocation={props.currentLocation} // Will add a 'Current location' button at the top of the predefined places list
    currentLocationLabel="Current location"
    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    GoogleReverseGeocodingQuery={{
      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
    }}
    GooglePlacesSearchQuery={{
      // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
      rankby: 'distance',
      types: 'establishment'
    }}

    filterReverseGeocodingByTypes={['geocode']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    renderLeftButton={()  => <Ionicons name={'ios-search'} size={32} style={styles.icon}/>}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    color: 'black',
    width: 45,
    paddingLeft: 15,
    paddingTop: 10,
  }
})

export default GooglePlacesInput
