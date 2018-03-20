
/**
 *
 */

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import t from 'tcomb-form-native';

import UserActions from '../../redux/user'

// Model
import { User, UserOptions } from '../../models/User'
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   *
   */
  handleSubmit = () => {
    const user = this._form.getValue(); // use that ref to get the form value
    this.props.login(user)
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={User}
          options={UserOptions} />
          <Button
            title="Sign In"
            onPress={this.handleSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 25,
    padding: 20
  }
});


const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapStateToDispatch = dispatch => ({
  login: (user) => dispatch(UserActions.login(user))
})

export default connect(mapStateToProps, mapStateToDispatch)(LoginContainer)
