
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
import { ResetPassword, UserOptionsResetPassword } from '../../models/User'
const Form = t.form.Form;

class ResetPasswordContainer extends React.Component {

  /**
   * constructor - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  constructor(props) {
    super(props);
    this.state = { error: '', loading: false }
    this.handleResetPassword = this.handleResetPassword.bind(this)
  }

  /**
   *
   */
  handleResetPassword() {
    // Use that ref to get the form value
    const user = this._form.getValue();
    this.props.resetPassword(user)
  }

  /**
   * renderResetPasswordButtonOrSpinner - description
   *
   * @return {type}  description
   */
  renderResetPasswordButtonOrSpinner() {
    if (this.state.loading) {
        return <Spinner />;
    }
    return <Button rounded block onPress={this.handleResetPassword} title="Reset Password" />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={ResetPassword}
          options={UserOptionsResetPassword} />
          {this.renderResetPasswordButtonOrSpinner()}
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
  resetPassword: (user) => dispatch(UserActions.resetPassword(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(ResetPasswordContainer)
