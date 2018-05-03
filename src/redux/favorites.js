
/**
 *
 */

import _ from 'lodash'
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getEvents: ['events'],
  getEventsSucceeded: ['events'],
  getEventsFailed: ['error'],
  getEventsFiltered: ['filter'],
  getEventsOwner: ['id'],
  addEvent: ['event'],
  addEventSucceeded: ['event'],
  addEventFailed: ['error'],
  updateEvent: ['event'],
  updateEventSucceeded: ['event'],
  updateEventFailed: ['error'],
  deleteEvent: ['eventKey'],
  deleteEventSucceeded: ['eventKey'],
  deleteEventFailed: ['error']
})

export const FavoritesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  events: [],
  eventsFiltered: [],
  eventsOwner: []
})

/* ------------- Reducers ------------- */

// request the data from an api
export const getEvents = (state, {events}) => state

export const getEventsSucceeded = (state, {events}) => {
  return Object.assign({}, state, { events: events })
}

export const getEventsFailed = (state, {error}) => error

export const getEventsFiltered = (state, {filter}) => {
  const eventsFiltered = _.filter(state.events, (item) => { return (item.modality === filter) })
  return Object.assign({}, state, { eventsFiltered: eventsFiltered })
}

export const getEventsOwner = (state, {id}) => {
  console.log(id);
  console.log(id);
  console.log(id);
  console.log(id);
  console.log(id);
  const eventsOwner = _.filter(state.events, (item) => { return (item.userId === id) })
  return Object.assign({}, state, { eventsOwner: eventsOwner })
}

export const addEvent = (state, {event}) => state

export const addEventSucceeded = (state, {event}) => {
  return Object.assign({}, state, { events: state.events.concat(event)})
}

export const addEventFailed = (state, {error}) => error

export const updateEvent = (state, {event}) => state

export const updateEventSucceeded = (state, {event}) => state

export const updateEventFailed = (state, {error}) => error

export const deleteEvent = (state, {event}) => state

export const deleteEventSucceeded = (state, {eventKey}) => {
  const eventsFiltered = state.events.filter((event) => {
    return event.key !== eventKey;
  })
  return Object.assign({}, state, { events: eventsFiltered})
}

export const deleteEventFailed = (state, {error}) => error

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_EVENTS]: getEvents,
  [Types.GET_EVENTS_SUCCEEDED]: getEventsSucceeded,
  [Types.GET_EVENTS_FAILED]: getEventsFailed,
  [Types.GET_EVENTS_FILTERED]: getEventsFiltered,
  [Types.GET_EVENTS_OWNER]: getEventsOwner,
  [Types.ADD_EVENT]: addEvent,
  [Types.ADD_EVENT_SUCCEEDED]: addEventSucceeded,
  [Types.ADD_EVENT_FAILED]: addEventFailed,
  [Types.UPDATE_EVENT]: updateEvent,
  [Types.UPDATE_EVENT_SUCCEEDED]: updateEventSucceeded,
  [Types.UPDATE_EVENT_FAILED]: updateEventFailed,
  [Types.DELETE_EVENT]: deleteEvent,
  [Types.DELETE_EVENT_SUCCEEDED]: deleteEventSucceeded,
  [Types.DELETE_EVENT_FAILED]: deleteEventFailed
})
