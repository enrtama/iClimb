
/**
 *
 */

import t from 'tcomb-form-native';

export const User = t.struct({
  email: t.String,
  password: t.String
});

export const UserOptions = {
  fields: {
    email: {
      error: 'Email needed to login'
    },
    password: {
      error: 'Password needed to login'
    }
  }
}
