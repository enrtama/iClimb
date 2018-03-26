
/**
 *
 */

import { put, call } from 'redux-saga/effects'
import { FavoritesTypes } from '../redux/favorites'
import { reduxSagaFirebase } from '../config/firebase.js'

export function* getEvents(action) {
  try {
    const events = yield call(reduxSagaFirebase.database.read, 'events/');
    yield put({type: FavoritesTypes.GET_EVENTS_SUCCEEDED, events: events});
  } catch (error) {
     yield put({type: FavoritesTypes.GET_EVENTS_FAILED, error: error.message});
  }
}
