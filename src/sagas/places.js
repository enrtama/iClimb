
/**
 *
 */

import { put, delay, select } from 'redux-saga/effects'
import { PlacesTypes } from '../redux/places'

import MARKERS from '../mockup/markers.js'

export function* getMarkers(action) {
  yield put({type: PlacesTypes.GET_MARKERS_SUCCEEDED, markers: MARKERS});
  // try {
  //   console.log(PLACES)
  //   yield put({type: "GET_MARKERS_SUCCEEDED", places: PLACES});
  // } catch (e) {
  //   yield put({type: "GET_MARKERS_FAILED", message: e.message});
  // }
}
