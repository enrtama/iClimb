
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

const GooglePlacesInput = (props) => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        props.getEvents(data)
      }}

    getDefaultValue={() => ''}

    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: 'AIzaSyAe5UO9EGXxJEluCtkiEVq0pxpEImRF6n0',
      language: 'en', // language of the results
      types: '(cities)' // default: 'geocode'
    }}

    styles={{
      textInputContainer: {
        backgroundColor: 'white',
        width: '100%'
      },
      description: {
        fontWeight: 'bold'
      },
      predefinedPlacesDescription: {
        color: '#1faadb'
      },
      listView: {
        position: 'absolute',
        top: 40,
        backgroundColor: 'white',
        zIndex: 3
      }
    }}

    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
    currentLocationLabel="Current location"
    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    GoogleReverseGeocodingQuery={{
      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
    }}
    GooglePlacesSearchQuery={{
      // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
      rankby: 'distance',
      types: 'food'
    }}

    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
    predefinedPlaces={[homePlace, workPlace]}

    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    renderLeftButton={()  => <Ionicons name={'ios-search'} size={32} style={styles.icon}/>}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    color: 'black',
    width: 45,
    paddingLeft: 10,
    paddingTop: 5,
  }
})

export default GooglePlacesInput
