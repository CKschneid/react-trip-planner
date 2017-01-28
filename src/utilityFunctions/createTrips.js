import intersection from 'lodash/intersection'

const findTripIdsBoth = (stopInstances, originID, destinationID) => {
  let tripIdsOrigin = stopInstances.filter(stopInstance => stopInstance.stop_id === originID)
                                      .map(stopInstance => stopInstance.trip_id)

  let tripIdsDestination = stopInstances.filter(stopInstance => stopInstance.stop_id === destinationID)
                                          .map(stopInstance => stopInstance.trip_id)

  return intersection(tripIdsOrigin, tripIdsDestination)
}
export {findTripIdsBoth}

const createTrips = (stopInstances, matchingTripIds, originID, destinationID) => {
  return (
    matchingTripIds.map(tripId => {
        return ({
          origin: stopInstances.filter((stopInstance) => stopInstance.stop_id === originID && stopInstance.trip_id === tripId)[0],
          destination: stopInstances.filter((stopInstance) => stopInstance.stop_id === destinationID && stopInstance.trip_id === tripId)[0]
        })
      }
    )
  )
}

export {createTrips}
/*

const createTrips = (stopInstances, originID, destinationID) => {

  let tripIdsOrigin = stopInstances.filter(stopInstance => stopInstance.stop_id === originID)
                                      .map(stopInstance => stopInstance.trip_id)

  let tripIdsDestination = stopInstances.filter(stopInstance => stopInstance.stop_id === destinationID)
                                          .map(stopInstance => stopInstance.trip_id)

  let tripIdsBoth = intersection(tripIdsOrigin, tripIdsDestination)

  let stopInstancesEither = stopInstances.filter(stopInstance => (
    stopInstance.stop_id === originID || stopInstance.stop_id.destinationID === destinationID
  ))

  return tripIdsBoth.map(tripId => {
    return ({
      originInfo: stopInstancesEither.filter((stopInstance) => stopInstance.stop_id === originID),
      destinationInfo: stopInstancesEither.filter((stopInstance) => stopInstance.stop_id === destinationID)
    })
  }
)


}

export default createTrips
*/
