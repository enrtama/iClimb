
/**
 *
 */

import React from 'react'
import { ImagePicker } from 'expo'
import { Content, Container, Button, Thumbnail } from 'native-base'
import { StyleSheet, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import { uploadImageEvent } from '../../utils/aws'
import GooglePlacesSearch from '../../components/GooglePlacesSearch/index.android'

import FavoritesActions from '../../redux/favorites'

// Model
import { EventModel, EventModelOptions } from '../../models/Event'
const Form = t.form.Form;

class EditEventContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props);
    this.state = { event: props.navigation.state.params.event }
    this.updateEvent = this.updateEvent.bind(this)
    this.onChange = this.onChange.bind(this)
    this.setLocation = this.setLocation.bind(this)
  }

  /**
   * updateEvent - description
   *
   * @return {type}  description
   */
  updateEvent() {
    const { event, location, geocode, placeId, image } = this.state
    const { navigation } = this.props;
    // const updatedEvent = {
    //   title: event.title,
    //   description: event.description,
    //   date: event.date.toString(),
    //   thumbnail: image,
    //   location: location,
    //   geocode: {latitude: geocode.lat, longitude: geocode.lng},
    //   placeId: placeId,
    //   userId: this.props.auth.user.email
    // }
    // this.props.updateEvent(updatedEvent)
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
      uploadImageEvent(file).then(response => {
        if (response.status !== 201)
          throw new Error("Failed to upload image to S3");
        const eventImage = response.body.postResponse.location
        this.setState({ image: eventImage });
      }).catch(error => alert(error))
    }
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { event } = this.state

    return (
      <Container style={styles.container}>
        <Content>
          <GooglePlacesSearch callback={this.setLocation} initialValue={event.location} title="Select an address" currentLocation={false} range="address"/>
          <Form
            ref={c => this._form = c}
            value={event}
            type={EventModel}
            options={EventModelOptions}
            onChange={this.onChange} />
            <View style={styles.imageContainer}>
              <Thumbnail large square source={{uri: event.image}} style={styles.thumbnail}/>
              <Button rounded info style={styles.button} onPress={this.pickImage}><Text style={styles.textButton}>Select an image</Text></Button>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    width: 200,
    height: 150
  }
})

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapStateToDispatch = dispatch => ({
  updateEvent: (event) => dispatch(FavoritesActions.updateEvent(event)),
})

export default connect(mapStateToProps, mapStateToDispatch)(EditEventContainer)
