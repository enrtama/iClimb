
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Container, Content, Footer, Button } from 'native-base';
import { NavigationActions } from 'react-navigation';
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
    this.handleSignup = this.handleSignup.bind(this)
  }

  /**
   * navigateToScreen - description
   *
   * @param  {type} route description
   * @return {type}       description
   */
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  /**
   *
   */
  handleSignup() {
    // Use that ref to get the form value
    const user = this._form.getValue();
    user && this.props.signup(user)
  }

  /**
   * renderSignupButtonOrSpinner - description
   *
   * @return {type}  description
   */
  renderSignupButton() {
    return <Button rounded block style={styles.button} onPress={this.handleSignup}><Text style={styles.textButton}>Create</Text></Button>;
  }

  /**
   * renderSigninButton - description
   *
   * @return {type}  description
   */
  renderSigninButton() {
    return <Button rounded block style={styles.button} onPress={this.navigateToScreen('Login')}><Text style={styles.textButton}>Login</Text></Button>
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form
            ref={c => this._form = c}
            type={User}
            options={UserOptionsLogin} />
            <View>
              {this.renderSignupButton()}
              <Text style={styles.textSeparator}>or</Text>
              {this.renderSigninButton()}
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
    padding: 10
  },
  textButton: {
    color: 'white',
    fontSize: 16
  },
  textSeparator: {
    textAlign: 'center',
    padding: 15
  }
});


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapStateToDispatch = dispatch => ({
  signup: (user) => dispatch(UserActions.signup(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(SignupContainer)
