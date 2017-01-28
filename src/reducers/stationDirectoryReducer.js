const stationDirectoryReducer = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_STATION_DIRECTORY':
      return action.stationDirectory
    default:
      return state
  }
}

export default stationDirectoryReducer
