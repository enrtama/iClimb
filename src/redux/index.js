
/**
 *
 */

import { combineReducers } from 'redux'
import configureStore from '../store/createStore'
import rootSaga from '../sagas'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    i18n: require('./i18n').reducer,
    user: require('./user').reducer,
    places: require('./places').reducer,
    favorites: require('./favorites').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
