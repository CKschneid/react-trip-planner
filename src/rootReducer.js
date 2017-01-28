import { combineReducers} from 'redux'
import fetchingStateReducer from './reducers/fetchingStateReducer'
import routesReducer from './reducers/routesReducer'
import stationDirectoryReducer from './reducers/stationDirectoryReducer'
import stopInstancesReducer from './reducers/stopInstancesReducer'
import tripsReducer from './reducers/tripsReducer'
import testInfoReducer from './reducers/testInfoReducer'

const rootReducer = combineReducers({
  stationDirectory: stationDirectoryReducer,
  stopInstances: stopInstancesReducer,
  routes: routesReducer,
  trips: tripsReducer,
  fethchingStates: fetchingStateReducer,
  testInfo: testInfoReducer
})

export default rootReducer
/*
import { combineReducers} from 'redux'
//import {userInfoReducer} from './userInfoReducer'

const testInfoReducer = (state="hello", action) => {
  switch (action.type) {
    case 'TEST':
      return 'reducer test'

    default:
      return state

  }
}

const rootReducer = combineReducers({
  testInfo: testInfoReducer

})

export default rootReducer
*/
