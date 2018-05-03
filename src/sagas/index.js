
/**
 *
 */

import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { StartupTypes } from '../redux/startup'
import { i18nTypes } from '../redux/i18n'
import { PlacesTypes } from '../redux/places'
import { FavoritesTypes } from '../redux/favorites'
import { UserTypes } from '../redux/user'

/* ------------- Sagas ------------- */
import { startup } from './startup'
import { updateLanguage } from './i18n'
import { getMarkers } from './places'
import { getEvents, addEvent, updateEvent, deleteEvent } from './favorites'
import { login, signup, resetPassword, signout, saveAvatar } from './user'

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(i18nTypes.CHANGE_LANGUAGE, updateLanguage),
    takeLatest(PlacesTypes.GET_MARKERS, getMarkers),
    takeLatest(FavoritesTypes.GET_EVENTS, getEvents),
    takeLatest(FavoritesTypes.ADD_EVENT, addEvent),
    takeLatest(FavoritesTypes.UPDATE_EVENT, updateEvent),
    takeLatest(FavoritesTypes.DELETE_EVENT, deleteEvent),
    takeLatest(UserTypes.LOGIN, login),
    takeLatest(UserTypes.SIGNUP, signup),
    takeLatest(UserTypes.RESET_PASSWORD, resetPassword),
    takeLatest(UserTypes.SIGNOUT, signout),
    takeLatest(UserTypes.SAVE_AVATAR, saveAvatar)
  ])
}
