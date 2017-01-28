import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const configureStore = () => {
  let composeEnhancers = compose

  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }

  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }

  const middleawares = [thunk]

  let enhancers = []


  const persistedState = undefined

  return createStore(rootReducer,
                          persistedState,
                          composeEnhancers(
                            applyMiddleware(...middleawares),
                            ...enhancers
                          )
                        )
}

export default configureStore
