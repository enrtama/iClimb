
/**
 *
 */

import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { StartupTypes } from '../redux/startup'

/* ------------- Sagas ------------- */
import { startup } from './startup'

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield[
    takeLatest(StartupTypes.STARTUP, startup)
  ]
}
