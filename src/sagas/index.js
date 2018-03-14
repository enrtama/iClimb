
/**
 *
 */

import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { StartupTypes } from '../redux/startup'
import { i18nTypes } from '../redux/i18n'

/* ------------- Sagas ------------- */
import { startup } from './startup'
import { updateLanguage } from './i18n'

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(i18nTypes.CHANGE_LANGUAGE, updateLanguage)
  ])
}
