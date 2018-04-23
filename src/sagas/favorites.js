
/**
 *
 */

import { put, call } from 'redux-saga/effects'
import { FavoritesTypes } from '../redux/favorites'
import { reduxSagaFirebase } from '../config/firebase'

export function* getEvents(action) {
  try {
    const events = yield call(reduxSagaFirebase.database.read, 'events/');
    yield put({type: FavoritesTypes.GET_EVENTS_SUCCEEDED, events: Object.values(events)});
  } catch (error) {
     yield put({type: FavoritesTypes.GET_EVENTS_FAILED, error: error.message});
  }
}

export function* addEvent(action) {
  const { event } = action
  try {
    const key = yield call(reduxSagaFirebase.database.create, 'events/', event);
    yield put({type: FavoritesTypes.ADD_EVENT_SUCCEEDED, event: event});
  } catch (error) {
     yield put({type: FavoritesTypes.ADD_EVENT_FAILED, error: error.message});
  }
}
