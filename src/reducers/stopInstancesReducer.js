const stopInstancesReducer = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_STOP_INSTANCES':
      return action.stopInstances
    default:
      return state
  }
}

export default stopInstancesReducer
