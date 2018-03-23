
/**
 *
 */

import t from 'tcomb-form-native';

export const User = t.struct({
  email: t.String,
  password: t.String
});

export const ResetPassword = t.struct({
  email: t.String
});

export const UserOptionsLogin = {
  fields: {
    email: {
      error: 'Email needed to login'
    },
    password: {
      error: 'Password needed to login',
      secureTextEntry: true
    }
  }
}

export const UserOptionsForgotPassword = {
  fields: {
    email: {
      error: 'Email needed to reset password'
    }
  }
}
