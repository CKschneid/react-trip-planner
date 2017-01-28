const initial = {
  stationDirectory: false,
  stopInstances: false,
  trips: false,
  routes: false
}

const fetchingStateReducer = (state=initial, action) => {
  switch (action.type) {
    case 'REQUEST_STATION_DIRECTORY':
      return {...state, stationDirectory: true}
    case 'RECEIVE_STATION_DIRECTORY':
      return {...state, stationDirectory: false}

    case 'REQUEST_STOP_INSTANCES':
      return {...state, stopInstances: true}
    case 'RECEIVE_STOP_INSTANCES':
      return {...state, stopInstances: false}

    case 'REQUEST_TRIPS':
      return {...state, trips: true}
    case 'RECEIVE_TRIPS':
      return {...state, trips: false}

    case 'REQUEST_ROUTES':
      return {...state, routes: true}
    case 'RECEIVE_ROUTES':
      return {...state, routes: false}

    default:
      return state
  }
}

export default fetchingStateReducer
