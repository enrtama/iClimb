
/**
 *
 */

import { put, call } from 'redux-saga/effects'
import { UserTypes } from '../redux/user'
import { reduxSagaFirebase } from '../config/firebase'

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
    yield put({type: "LOGIN_SUCCEEDED", isAuthenticated: true, user: userLogged});
  } catch(error) {
    alert(error.message)
    yield put({type: "LOGIN_FAILED", error: error.message});
  }
}

export function* signup(action) {
  const { user } = action;
  const { email, password } = user;
  try {
    const data = yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, email, password);
    yield put({type: "SIGNUP_SUCCEEDED", user: data});
  } catch(error) {
    alert(error.message)
    yield put({type: "SIGNUP_FAILED", error: error.message});
  }
}

export function* resetPassword(action) {
  const { user } = action;
  const { email } = user;
  try {
    yield call(reduxSagaFirebase.auth.sendPasswordResetEmail, email);
    yield put({type: "RESET_PASSWORD_SUCCEEDED"});
  } catch(error) {
    alert(error.message)
    yield put({type: "RESET_PASSWORD_FAILED", error: error.message});
  }
}
