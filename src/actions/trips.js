import axios from 'axios'

const requestTrips = () => ({
  type: 'REQUEST_TRIPS'
})

const receiveTrips = (data) => ({
  type: 'RECEIVE_TRIPS',
  trips: data
})

const fetchTrips = () => {
  return (dispatch) => {
    dispatch(requestTrips())
    return (
      axios.get('./rail_data/trips.json')
            .then( res => dispatch(receiveTrips(res.data)))
    )
  }
}

export default fetchTrips
