/* eslint-env browser */
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {applyMiddleware, compose, createStore} from 'redux'
import {setObjects} from './actions'
import {parseJSONObjects} from './utils'

import reducer from './reducers/'

/* eslint-disable no-underscore-dangle */
const isDev = process.env.NODE_ENV !== 'production'
const logRedux = false
const useLoggerAndDevTools = process.env.NODE_ENV !== 'test' && isDev
const composeEnhancers =
  (useLoggerAndDevTools && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
/* eslint-enable */

const store = useLoggerAndDevTools
  ? createStore(
    reducer,
    logRedux ? composeEnhancers(applyMiddleware(createLogger(), thunk))
      : composeEnhancers(applyMiddleware(thunk)),
  )
  : createStore(reducer, JSON.parse(localStorage['redux-store']))


if (localStorage.getItem(('redux-store'))) {
  const data = JSON.parse(localStorage.getItem('redux-store'))
  store.dispatch(setObjects(parseJSONObjects(data)))
}


store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState().objects)
})

export default store
