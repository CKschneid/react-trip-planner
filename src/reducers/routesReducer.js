const routesReducer = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_ROUTES':
      return action.routes
    default:
      return state
  }
}

export default routesReducer
