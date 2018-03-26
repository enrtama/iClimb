
/**
 *
 */

import { put, delay, select } from 'redux-saga/effects'
import { UserTypes } from '../redux/user'

import EVENTS from '../mockup/events.js'
import { auth } from '../config/firebase.js'

export function* login(action) {
  const { user } = action;
  const { email, password } = user;
  try {
     auth.signInWithEmailAndPassword(email, password)
       .catch((error) => { alert(error.message) });
     yield put({type: "USER_FETCH_SUCCEEDED", isAuthenticated: true});
  } catch (error) {
     yield put({type: "USER_FETCH_FAILED", error: error.message});
  }
}

export function* resetPassword(action) {
  const { user } = action;
  const { email } = user;
  try {
     auth.sendPasswordResetEmail(email)
       .catch((error) => { alert(error.message) });
     yield put({type: "RESET_PASSWORD_SUCCEEDED"});
  } catch (error) {
     yield put({type: "RESET_PASSWORD_FAILED", error: error.message});
  }
}

export function* signup(action) {
  const { user } = action;
  const { email, password } = user;
  try {
     auth.createUserWithEmailAndPassword(email, password)
       .catch((error) => { alert(error.message) });
     yield put({type: "SIGNUP_SUCCEEDED"});
  } catch (error) {
     yield put({type: "SIGNUP_FAILED", error: error.message});
  }
}
