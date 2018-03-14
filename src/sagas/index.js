import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { StartupTypes } from '../redux/startup'
import { SettingsTypes } from '../redux/i18n'

/* ------------- Sagas ------------- */
import { startup } from './startup'
import { updateLanguage } from './i18n'

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield[
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(SettingsTypes.CHANGE_LANGUAGE, updateLanguage)
  ]
}
