
/**
 *
 */

import { put, call } from 'redux-saga/effects'
import { FavoritesTypes } from '../redux/favorites'
import { reduxSagaFirebase } from '../config/firebase'

export function* getEvents(action) {
  try {
    const events = yield call(reduxSagaFirebase.database.read, 'events/');
    const eventsWithKey = Object.keys(events).map((key) => {
      events[key].key = key
      return events[key]
    });
    yield put({type: FavoritesTypes.GET_EVENTS_SUCCEEDED, events: Object.values(eventsWithKey)});
  } catch (error) {
     yield put({type: FavoritesTypes.GET_EVENTS_FAILED, error: error.message});
  }
}

export function* addEvent(action) {
  let { event } = action
  try {
    const key = yield call(reduxSagaFirebase.database.create, 'events/', event);
    event.key = key
    yield put({type: FavoritesTypes.ADD_EVENT_SUCCEEDED, event: event});
  } catch (error) {
     yield put({type: FavoritesTypes.ADD_EVENT_FAILED, error: error.message});
  }
}

export function* deleteEvent(action) {
  const { eventKey } = action
  try {
    yield call(reduxSagaFirebase.database.delete, 'events/' + eventKey);
    yield put({type: FavoritesTypes.DELETE_EVENT_SUCCEEDED, eventKey: eventKey});
  } catch (error) {
     yield put({type: FavoritesTypes.DELETE_EVENT_FAILED, error: error.message});
  }
}

export function* updateEvent(action) {
  const { event } = action
  try {
    yield call(reduxSagaFirebase.database.update, 'events/' + event.key, event);
    yield put({type: FavoritesTypes.UPDATE_EVENT_SUCCEEDED, event: event});
  } catch (error) {
     yield put({type: FavoritesTypes.UPDATE_EVENT_FAILED, error: error.message});
  }
}
