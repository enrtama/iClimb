
/**
 *
 */

 import { put, delay, select } from 'redux-saga/effects'

import EVENTS from '../mockup/events.js'

export function* getEvents(action) {
  yield put({type: "GET_EVENTS_SUCCEEDED", events: EVENTS});
  // try {
  //   console.log(PLACES)
  //   yield put({type: "GET_MARKERS_SUCCEEDED", places: PLACES});
  // } catch (e) {
  //   yield put({type: "GET_MARKERS_FAILED", message: e.message});
  // }
}
