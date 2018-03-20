
/**
 *
 */

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getMarkers: ['places'],
  getMarkersSucceeded: ['places'],
  getMarkersFailed: ['error']
})

export const PlacesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  markers: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const getMarkers = (state, {markers}) => state.merge({
  markers
})

export const getMarkersSucceeded = (state, {markers}) => {
  return state.merge({markers})
}

export const getMarkersFailed = (state, {markers}) => state.merge({
  markers
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MARKERS]: getMarkers,
  [Types.GET_MARKERS_SUCCEEDED]: getMarkersSucceeded,
  [Types.GET_MARKERS_FAILED]: getMarkersFailed,
})
