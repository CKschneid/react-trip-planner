import {combineReducers} from 'redux'

const tripsReducer = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_TRIPS':
      return action.trips
    default:
      return state
  }
}

export default tripsReducer
