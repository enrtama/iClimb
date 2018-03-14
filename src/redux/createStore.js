
/**
 * 
 */

import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */

  if (__DEV__) {
    // create the logger
    const loggerMiddleware = createLogger({
      level: 'info',
      collapsed: true
    })
    middleware.push(loggerMiddleware)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))


  const store = createStore(rootReducer, compose(...enhancers))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
