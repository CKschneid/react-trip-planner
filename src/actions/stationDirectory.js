import axios from 'axios'
import localforage from 'localforage'
import findIndex from 'lodash/findIndex'

const requestStationDirectory = () => ({
  type: 'REQUEST_STATION_DIRECTORY'
})

const receiveStationDirectory = (data) => ({
  type: 'RECEIVE_STATION_DIRECTORY',
  stationDirectory: data
})

const fetchStationDirectory = () => {
  return (dispatch) => {
    dispatch(requestStationDirectory())
    return (
      axios.get('./rail_data/stops.json')
            .then( res =>  dispatch(receiveStationDirectory(res.data)))
      )
    }
  }

/*
  const fetchStationDirectory = () => {
    return (dispatch) => {
      dispatch(requestStationDirectory())
      return (
        localforage.keys().then( keys => {
          if( findIndex( keys, (key) => {
                key == 'stationDirectory'}) != -1 ){
            return (
                localforage.getItem('stationDirectory')
                                .then(stationDirectory => {
                                  dispatch(receiveStationDirectory(stationDirectory))
                                })
            )} else {
              return (
                axios.get('./rail_data/stops.json')
                        .then( res => {
                          localforage.setItem('stationDirectory', res.data )
                            }).then( resData => {
                                dispatch(receiveStationDirectory(resData))
                            })
              )
          }
        })
      )
    }
  }
*/

export default fetchStationDirectory
