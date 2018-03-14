
/**
 *
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import devToolsEnhancer from 'remote-redux-devtools'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */

  // create the logger
  const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
  })
  middleware.push(loggerMiddleware)

  /* ------------- Assemble Middleware ------------- */

  const store = createStore(rootReducer, compose(applyMiddleware(loggerMiddleware, sagaMiddleware), devToolsEnhancer()));

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
