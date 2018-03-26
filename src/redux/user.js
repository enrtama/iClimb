
/**
 *
 */

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  login: ['user'],
  loginSucceeded: ['isAuthenticated'],
  loginFailed: ['error'],
  signup: ['user'],
  signupSucceeded: ['user'],
  signupFailed: ['error'],
  resetPassword: ['user'],
  resetPasswordSucceeded: ['password'],
  resetPasswordFailed: ['error']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  user: null,
  isAuthenticated: false,
  error: null
})

/* ------------- Reducers ------------- */

// Request the data from an api
export const login = (state, {user}) => state.merge({
  user
})

export const loginSucceeded = (state, {isAuthenticated}) => state.merge({
  isAuthenticated
})

export const loginFailed = (state, {error}) => state.merge({
  error
})

export const signup = (state, {user}) => state.merge({
  user
})

export const signupSucceeded = (state, {user}) => state.merge({
  user
})

export const signupFailed = (state, {error}) => state.merge({
  error
})

export const resetPassword = (state, {user}) => state.merge({
  user
})

export const resetPasswordSucceeded = (state, {isAuthenticated}) => state.merge({
  isAuthenticated
})

export const resetPasswordFailed = (state, {error}) => state.merge({
  error
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCEEDED]: loginSucceeded,
  [Types.LOGIN_FAILED]: loginFailed,
  [Types.SIGNUP]: signup,
  [Types.SIGNUP_SUCCEEDED]: signupSucceeded,
  [Types.SIGNUP_FAILED]: signupFailed,
  [Types.RESET_PASSWORD]: resetPassword,
  [Types.RESET_PASSWORD_SUCCEEDED]: resetPasswordSucceeded,
  [Types.RESET_PASSWORD_FAILED]: resetPasswordFailed
})
