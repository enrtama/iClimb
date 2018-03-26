
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import { Spinner } from 'native-base';
import { connect } from 'react-redux'
import t from 'tcomb-form-native';

import UserActions from '../../redux/user'

// Model
import { User, UserOptionsLogin } from '../../models/User'
const Form = t.form.Form;

class SignupContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props);
    this.state = { error: '',loading: false }
    this.handleSignup = this.handleSignup.bind(this)
  }

  /**
   *
   */
  handleSignup() {
    // Use that ref to get the form value
    const user = this._form.getValue();
    this.props.signup(user)
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
    user: state.user,
  }
}

const mapStateToDispatch = dispatch => ({
  signup: (user) => dispatch(UserActions.signup(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(SignupContainer)
