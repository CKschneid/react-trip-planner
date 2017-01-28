import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {findTripIdsBoth, createTrips} from '../utilityFunctions/createTrips'

class TripViewContainer extends Component {
  constructor(props){
  	super(props)
  	this.state = {}
  }
  render(){
    const {originName, destinationName, originID, destinationID} = this.props
    const {matchingTrips} = this.props
    return(
      <div>
        <h3> Trips: </h3>
        <span>origin: {originName}, destination: {destinationName}</span><br/>
        <span>origin id: {originID}, destination id: {destinationID}</span><br/>
        <div>
          {
            matchingTrips.map( (trip, index) =>
              <div key={index}>
                Departs from <span>{originName}</span> at {trip.origin.departure_time} <br/>
                Arrives at <span>{destinationName}</span> at {trip.destination.arrival_time} <br/>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToTripViewContainerProps = (state, {params}) => {
  const {origin, destination} = params
  const originID = state.stationDirectory.filter(station => station.stop_name === origin)
                                          .map(station => station.stop_id)[0]

  const destinationID = state.stationDirectory.filter(station => station.stop_name === destination)
                                          .map(station => station.stop_id)[0]
  const tripIdsBoth = findTripIdsBoth(state.stopInstances, originID, destinationID)
/*why doesn't array.prototype.find work here?
   const destinationID = state.stationDirectory.find(station => {
     station.stop_name === destination
   })[selector]
*/
  return ({
    originName: origin,
    destinationName: destination,
    originID: originID,
    destinationID: destinationID,
    matchingTrips: createTrips(state.stopInstances, tripIdsBoth, originID, destinationID)
  })
}

const TripViewSuperContainer = withRouter(connect(mapStateToTripViewContainerProps)(TripViewContainer))

export default TripViewSuperContainer
