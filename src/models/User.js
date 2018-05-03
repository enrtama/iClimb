
/**
 *
 */

import t from 'tcomb-form-native'
import _ from 'lodash'

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;

export const User = t.struct({
  email: t.String,
  password: t.String
});

export const UserProfile = t.struct({
  email: t.String,
  displayName: t.String
});

export const ResetPassword = t.struct({
  email: t.String
});

export const UserOptionsLogin = {
  stylesheet: stylesheet,
  fields: {
    email: {
      autoFocus: true,
      error: 'Email needed to login'
    },
    password: {
      error: 'Password needed to login',
      secureTextEntry: true
    }
  }
}

export const UserOptionsEditProfile = {
  stylesheet: stylesheet,
  auto: 'placeholders'
}

export const UserOptionsForgotPassword = {
  stylesheet: stylesheet,
  fields: {
    email: {
      error: 'Email needed to reset password'
    }
  }
}
