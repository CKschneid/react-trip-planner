import fetchStationDirectory from './stationDirectory'
import fetchStopInstances from './stopInstances'
import fetchRoutes from './routes'
import fetchTrips from './trips'

const requestEverything = () => ({
  type: 'REQUEST_EVERYTHING'
})

const fetchEverything = () => {
  return (dispatch) => {
    dispatch(requestEverything())
    return (
        Promise.all([
          dispatch(fetchStationDirectory()),
          dispatch(fetchStopInstances()),
          dispatch(fetchRoutes()),
          dispatch(fetchTrips())
        ])
    )
  }
}

export default fetchEverything
