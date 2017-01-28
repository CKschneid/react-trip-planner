import React, {Component} from 'react'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './rootReducer'
import AppContainer from './AppContainer'
import configureStore from './configureStore'

let store = configureStore()
export default class Root extends Component {
  render(){
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
