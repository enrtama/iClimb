
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

import UserActions from '../../redux/user'

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
    this.state = { image: null, value: props.auth.user }
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
    console.log(user)
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
      this.setState({ image: result.uri });
      this.props.saveAvatar(result.uri)
    }
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { image, value } = this.state
    const { auth } = this.props;
    const { user } = auth;

    const loadImage = image ? image : (user && user.avatar)

    return (
      <Container style={styles.container}>
        <Content>
          <Form
            ref={c => this._form = c}
            type={UserProfile}
            options={UserOptionsEditProfile}
            value={value}
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
  saveAvatar: (url) => dispatch(UserActions.saveAvatar(url))
})

export default connect(mapStateToProps, mapStateToDispatch)(EditProfileContainer)
