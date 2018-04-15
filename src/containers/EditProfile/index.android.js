
/**
 *
 */

import React from 'react'
import { ImagePicker } from 'expo'
import { RNS3 } from 'react-native-aws3'
import { Content, Container, Button, Thumbnail } from 'native-base'
import { StyleSheet, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'

import UserActions from '../../redux/user'
import { AWS } from '../../constants'

// Model
import { UserProfile, UserOptionsEditProfile } from '../../models/User'
const Form = t.form.Form;

class EditProfileContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props);
    this.state = { image: null, user: props.auth.user }
    this.saveProfile = this.saveProfile.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  /**
   * saveProfile - description
   *
   * @return {type}  description
   */
  saveProfile() {
    // Use that ref to get the form value
    const user = this._form.getValue();
    // console.log(user)
    //user && this.props.saveProfile(user)
  }

  /**
   * onChange - description
   *
   * @param  {type} value description
   * @return {type}       description
   */
  onChange(value) {
    this.setState({value});
  }

  /**
   * renderSaveButton - description
   *
   * @return {type}  description
   */
  renderSaveButton() {
    return <Button rounded block style={styles.button} onPress={this.saveProfile}><Text style={styles.textButton}>Save</Text></Button>
  }

  /**
   *
   */
  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
      const extension = result.uri.split('.').pop();
      const randomString = "_" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
      const file = {
        uri: result.uri,
        name: this.state.user.displayName + randomString + '.' + extension,
        type: result.type + '/' + extension
      }
      RNS3.put(file, AWS).then(response => {
        if (response.status !== 201)
          throw new Error("Failed to upload image to S3");
        const avatar = response.body.postResponse.location
        this.setState({ image: avatar });
        this.props.saveAvatar(avatar)
      }).catch(error => {
        alert(error)
      })
    }
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { image, user } = this.state
    const { auth } = this.props;

    const loadImage = image ? image : (user && user.avatar)

    return (
      <Container style={styles.container}>
        <Content>
          <Form
            ref={c => this._form = c}
            type={UserProfile}
            options={UserOptionsEditProfile}
            value={user}
            onChange={this.onChange} />
            <View style={styles.avatarContainer}>
              <Thumbnail large source={{uri: loadImage}} />
              <Button rounded info style={styles.button} onPress={this._pickImage}><Text style={styles.textButton}>Pick an avatar</Text></Button>
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
    padding: 20
  },
  button: {
    padding: 10,
    marginVertical: 15
  },
  textButton: {
    color: 'white',
    fontSize: 16
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapStateToDispatch = dispatch => ({
  saveProfile: (user) => dispatch(UserActions.saveProfile(user)),
  saveAvatar: (avatarUrl) => dispatch(UserActions.saveAvatar(avatarUrl))
})

export default connect(mapStateToProps, mapStateToDispatch)(EditProfileContainer)
