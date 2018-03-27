
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

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={User}
          options={UserOptionsLogin} />
          {this.renderSigninButtonOrSpinner()}
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
    auth: state.auth
  }
}

const mapStateToDispatch = dispatch => ({
  login: (user) => dispatch(UserActions.login(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(LoginContainer)
