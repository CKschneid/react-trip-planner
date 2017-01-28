import axios from 'axios'

const requestStopInstances = () => ({
  type: 'REQUEST_STOP_INSTANCES'
})

const receiveStopInstances = (data) => ({
  type: 'RECEIVE_STOP_INSTANCES',
  stopInstances: data
})

const fetchStopInstances = () => {
  return (dispatch) => {
    dispatch(requestStopInstances())
    return (
      axios.get('./rail_data/stop_times.json')
            .then( res => dispatch(receiveStopInstances(res.data)))
      )
  }
}

export default fetchStopInstances
