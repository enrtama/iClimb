
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import { connect } from 'react-redux'
import firebase from 'firebase';
import { Spinner } from 'native-base';
import t from 'tcomb-form-native';

import UserActions from '../../redux/user'

// Model
import { User, UserOptionsLogin } from '../../models/User'
const Form = t.form.Form;

class LoginContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props);
    this.state = { error: '',loading: false }
    this.handleSignin = this.handleSignin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  /**
   *
   */
  handleSignin() {
    // Use that ref to get the form value
    const user = this._form.getValue();
    this.props.login(user)
  }

  /**
   * handleSignup - description
   *
   * @return {type}  description
   */
  handleSignup() {
    const user = this._form.getValue(); // use that ref to get the form value
    const { email, password } = user;

    this.setState({ error: '', loading: true });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => { this.setState({ error: '', loading: false }); })
      .catch(() => {
        this.setState({ error: 'Create account failed.', loading: false });
      });
  }

  /**
   * renderSigninButtonOrSpinner - description
   *
   * @return {type}  description
   */
  renderSigninButtonOrSpinner() {
    if (this.state.loading) {
        return <Spinner />;
    }
    return <Button onPress={this.handleSignin} title="Sign in" />;
  }

  /**
   * renderSignupButtonOrSpinner - description
   *
   * @return {type}  description
   */
  renderSignupButtonOrSpinner() {
    if (this.state.loading) {
        return <Spinner />;
    }
    return <Button onPress={this.handleSignup} title="Sign up" />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={User}
          options={UserOptionsLogin} />
          {this.renderSigninButtonOrSpinner()}
          {this.renderSignupButtonOrSpinner()}
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 25,
    padding: 20
  },
  errorTextStyle: {
    color: '#E64A19',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
});


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapStateToDispatch = dispatch => ({
  login: (user) => dispatch(UserActions.login(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(LoginContainer)
