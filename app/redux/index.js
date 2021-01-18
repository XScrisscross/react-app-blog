import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '~reducer'

const loggerMiddleware = createLogger()

const files = require.context('./', true, /(^\.\/middlewares)([a-zA-Z\/\_]+)\.js$/)

const initmMiddlewares = (files, middlewares = []) => {
  files.keys().forEach((item) => {
    middlewares = [...middlewares, files(item).default]
  })
  return middlewares
}

export default ((rootReducer, preloadedState, middlewares) => {
  return createStore(reducers, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware, ...middlewares))
})(reducers, {}, initmMiddlewares(files))
