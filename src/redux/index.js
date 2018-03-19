
/**
 *
 */

import { combineReducers } from 'redux'
import configureStore from '../store/createStore'
import rootSaga from '../sagas'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    i18n: require('./i18n').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
