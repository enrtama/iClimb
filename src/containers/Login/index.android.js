
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
import firebase from 'firebase';
import { Footer, Container, Content, Button } from 'native-base';
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
    this.handleSignin = this.handleSignin.bind(this)
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
   * componentWillReceiveProps - description
   *
   * @param  {type} nextProps description
   * @return {type}           description
   */
  componentWillReceiveProps(nextProps) {
    const { navigate } = nextProps.navigation;
    if (nextProps.auth.isAuthenticated) {
      // Go to Home if the user has logged in successfully
      navigate('Home')
    }
  }

  /**
   * handleSignin - description
   *
   * @return {type}  description
   */
  handleSignin() {
    const { login, navigation } = this.props
    // Use that ref to get the form value
    const user = this._form.getValue();
    user && login(user)
  }

  /**
   * renderSigninButton - description
   *
   * @return {type}  description
   */
  renderSigninButton() {
    return <Button rounded block style={styles.button} onPress={this.handleSignin}><Text style={styles.textButton}>Login</Text></Button>;
  }

  /**
   * renderSignupButton - description
   *
   * @return {type}  description
   */
  renderSignupButton() {
    return <Button rounded block style={styles.button} onPress={this.navigateToScreen('Signup')}><Text style={styles.textButton}>Go to create an account</Text></Button>
  }

  /**
   * renderResetPasswordButton - description
   *
   * @return {type}  description
   */
  renderResetPasswordButton() {
    return <Button transparent block style={styles.button} onPress={this.navigateToScreen('ResetPassword')}><Text style={styles.textFooter}>Forgot password?</Text></Button>
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
              {this.renderSigninButton()}
              <Text style={styles.textSeparator}>or</Text>
              {this.renderSignupButton()}
            </View>
          </Content>
        <Footer style={styles.footer}>{this.renderResetPasswordButton()}</Footer>
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
  },
  footer:{
    backgroundColor: 'transparent'
  },
  textFooter: {
    fontSize: 18
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
