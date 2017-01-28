import axios from 'axios'

const requestRoutes = () => ({
  type: 'REQUEST_ROUTES'
})

const receiveRoutes = (data) => ({
  type: 'RECEIVE_ROUTES',
  routes: data
})

const fetchRoutes = () => {
  return (dispatch) => {
    dispatch(requestRoutes())
    return (
      axios.get('./rail_data/routes.json')
            .then( res => dispatch(receiveRoutes(res.data)))
    )
  }
}

export default fetchRoutes
