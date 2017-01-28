const testInfoReducer = (state='pristine', action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return action.payload
    default:
      return state
  }
}

export default testInfoReducer
