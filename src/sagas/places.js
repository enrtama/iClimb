
/**
 *
 */

import { put, call } from 'redux-saga/effects'
import { PlacesTypes } from '../redux/places'
import { reduxSagaFirebase } from '../config/firebase.js'

export function* getMarkers(action) {
  try {
    const markers = yield call(reduxSagaFirebase.database.read, 'markers/');
    yield put({type: PlacesTypes.GET_MARKERS_SUCCEEDED, markers: markers});
  } catch (error) {
     yield put({type: FavoritesTypes.GET_MARKERS_FAILED, error: error.message});
  }
}
