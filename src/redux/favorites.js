
/**
 *
 */

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getEvents: ['favorites'],
  getEventsSucceeded: ['favorites'],
  getEventsFailed: ['error']
})

export const FavoritesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  events: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const getEvents = (state, {events}) => state.merge({
  events
})

export const getEventsSucceeded = (state, {events}) => state.merge({
  events
})

export const getEventsFailed = (state, {events}) => state.merge({
  events
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_EVENTS]: getEvents,
  [Types.GET_EVENTS_SUCCEEDED]: getEventsSucceeded,
  [Types.GET_EVENTS_FAILED]: getEventsFailed,
})
