
/**
 *
 */

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getEvents: ['events'],
  getEventsSucceeded: ['events'],
  getEventsFailed: ['error'],
  addEvent: ['event'],
  addEventSucceeded: ['event'],
  addEventFailed: ['error']
})

export const FavoritesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  events: [],
  myEvents: []
})

/* ------------- Reducers ------------- */

// request the data from an api
export const getEvents = (state, {events}) => state

export const getEventsSucceeded = (state, {events}) => {
  return Object.assign({}, state, { events: events })
}

export const getEventsFailed = (state, {error}) => error

export const addEvent = (state, {event}) => state

export const addEventSucceeded = (state, {event}) => {
  return Object.assign({}, state, { myEvents: state.myEvents.concat(event)})
}

export const addEventFailed = (state, {error}) => error

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_EVENTS]: getEvents,
  [Types.GET_EVENTS_SUCCEEDED]: getEventsSucceeded,
  [Types.GET_EVENTS_FAILED]: getEventsFailed,
  [Types.ADD_EVENT]: addEvent,
  [Types.ADD_EVENT_SUCCEEDED]: addEventSucceeded,
  [Types.ADD_EVENT_FAILED]: addEventFailed
})
