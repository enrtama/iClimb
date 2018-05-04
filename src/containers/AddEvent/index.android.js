
/**
 *
 */

import React from 'react'
import moment from 'moment'
import DatePicker from 'react-native-datepicker'
import { ImagePicker } from 'expo'
import { Content, Container, Button, Thumbnail, Spinner } from 'native-base'
import { StyleSheet, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import { uploadImageEvent } from '../../utils/aws'
import { SPORT_MODALITY } from '../../constants'
import GooglePlacesSearch from '../../components/GooglePlacesSearch/index.android'

import FavoritesActions from '../../redux/favorites'

// Model
import { EventModel, EventModelOptions } from '../../models/Event'
const Form = t.form.Form;

class AddEventContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props);
    this.state = {
      event: { modality: SPORT_MODALITY.INDOOR_BOULDERING },
      image: null,
      imageLoading: false,
      location: null,
      geocode: null,
      placeId: null,
      date: null
    }
    this.addEvent = this.addEvent.bind(this)
    this.onChange = this.onChange.bind(this)
    this.setLocation = this.setLocation.bind(this)
  }

  /**
   * addEvent - description
   *
   * @return {type}  description
   */
  addEvent() {
    const { event, location, geocode, placeId, image, date } = this.state
    const { navigation } = this.props;
    const newEvent = {
      title: event.title,
      description: event.description,
      date: date,
      thumbnail: image,
      location: location,
      geocode: geocode ? {latitude: geocode.lat, longitude: geocode.lng} : {},
      placeId: placeId,
      modality: event.modality,
      userId: this.props.auth.user ? this.props.auth.user.email : ''
    }
    this.props.addEvent(newEvent)
    navigation.goBack()
  }

  /**
   * onChange - description
   *
   * @param  {type} value description
   * @return {type}       description
   */
  onChange(value) {
    this.setState({event: value});
  }

  /**
   * setLocation - description
   *
   * @param  {type} value description
   * @return {type}       description
   */
  setLocation(location, geocode) {
    this.setState({location: location.description, geocode: geocode, placeId: location.id});
  }

  /**
   * renderSaveButton - description
   *
   * @return {type}  description
   */
  renderSaveButton() {
    return <Button rounded block style={styles.button} onPress={this.addEvent}><Text style={styles.textButton}>Add</Text></Button>
  }

  /**
   * pickImage - description
   *
   * @return {type}  description
   */
  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
      const extension = result.uri.split('.').pop();
      const randomString = "event_" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
      const file = {
        uri: result.uri,
        name: randomString + '.' + extension,
        type: result.type + '/' + extension
      }
      this.setState({ imageLoading: true });
      uploadImageEvent(file).then(response => {
        if (response.status !== 201)
          throw new Error("Failed to upload image to S3");
        const eventImage = response.body.postResponse.location
        this.setState({ image: eventImage, imageLoading: false });
      }).catch(error => alert(error))
    }
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { image, imageLoading, event, date } = this.state
    return (
      <Container style={styles.container}>
        <Content>
          <GooglePlacesSearch callback={this.setLocation} title="Select an address" currentLocation={false} range="address"/>
          <Form
            ref={c => this._form = c}
            value={event}
            type={EventModel}
            options={EventModelOptions}
            onChange={this.onChange} />
            <DatePicker
              style={styles.datepicker}
              date={date}
              mode="datetime"
              placeholder="Select date and time"
              format="DD.MM.YYYY h:mm:ss"
              minDate={moment().format('DD.MM.YYYY')}
              maxDate="31.12.2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
            <View style={styles.imageContainer}>
              {image ? <Thumbnail large square source={{uri: image}} style={styles.thumbnail}/> : !imageLoading && <Ionicons
                name={'ios-image'}
                size={96}
                style={{color:'black'}}/>}
              {imageLoading ? <Spinner /> : <Button transparent block info style={styles.button} onPress={this.pickImage}><Text>Select an image</Text></Button>}
            </View>
            <View>
              {this.renderSaveButton()}
            </View>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 25,
    padding: 10
  },
  button: {
    padding: 10,
    marginVertical: 15
  },
  textButton: {
    color: 'white',
    fontSize: 16
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  thumbnail: {
    width: 200,
    height: 150
  },
  datepicker: {
    width: '100%'
  }
})

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapStateToDispatch = dispatch => ({
  addEvent: (event) => dispatch(FavoritesActions.addEvent(event)),
})

export default connect(mapStateToProps, mapStateToDispatch)(AddEventContainer)
