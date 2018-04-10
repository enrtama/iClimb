
/**
 *
 */

import firebase from 'firebase';
import { put, call } from 'redux-saga/effects'
import { UserTypes } from '../redux/user'
import { reduxSagaFirebase } from '../config/firebase'
import { NavigationActions } from 'react-navigation';

/**
 * export function - description
 *
 * @param  {type} action description
 * @return {type}        description
 */
export function* login(action) {
  const { user } = action;
  const { email, password } = user;
  try {
    const data = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, email, password);
    const userLogged = {
      email: data.email,
      password: password,
      displayName: data.displayName,
      avatar: data.photoURL,
    }
    yield put({type: UserTypes.LOGIN_SUCCEEDED, isAuthenticated: true, user: userLogged});
  } catch(error) {
    alert(error.message)
    yield put({type: UserTypes.LOGIN_FAILED, error: error.message});
  }
}

/**
 * export function - description
 *
 * @param  {type} action description
 * @return {type}        description
 */
export function* signup(action) {
  const { user } = action;
  const { email, password } = user;
  try {
    const data = yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, email, password);
    yield put({type: UserTypes.SIGNUP_SUCCEEDED, user: data});
  } catch(error) {
    alert(error.message)
    yield put({type: UserTypes.SIGNUP_FAILED, error: error.message});
  }
}


/**
 * export function - description
 *
 * @param  {type} action description
 * @return {type}        description
 */
export function* resetPassword(action) {
  const { user } = action;
  const { email } = user;
  try {
    yield call(reduxSagaFirebase.auth.sendPasswordResetEmail, email);
    yield put({type: UserTypes.RESET_PASSWORD_SUCCEEDED});
  } catch(error) {
    alert(error.message)
    yield put({type: UserTypes.RESET_PASSWORD_FAILED, error: error.message});
  }
}

/**
 * export function - description
 *
 * @param  {type} action description
 * @return {type}        description
 */
export function* signout(action) {
  try {
    yield call(reduxSagaFirebase.auth.signOut);
    yield put({type: UserTypes.SIGNOUT_SUCCEEDED, user: null});
  } catch(error) {
    alert(error.message)
    yield put({type: UserTypes.SIGNUP_FAILED, error: error.message});
  }
}

export function* saveAvatar(action) {
  const { avatar } = action
  try {

    const user = firebase.auth().currentUser;
    user.updateProfile({
      photoURL: 'https://picsum.photos/200'
    }).then(function(result) {
      console.log(result);
    }).catch(function(error) {
      console.log(error);
    });

    yield put({type: UserTypes.SAVE_AVATAR_SUCCEEDED, avatar});
  } catch(error) {
    alert(error.message)
    yield put({type: UserTypes.SAVE_AVATAR_FAILED, error: error.message});
  }
}
