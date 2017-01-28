const findOriginTripIds = (stopInstances, originID) => {
  let stopInstancesAtOrigin = stopInstances.filter(stopInstance => {
    stopInstance.stop_id === originID
    }
  )
  let tripIdsAtOrigin = stopInstancesAtOrigin.map(stopInstance => stopInstance.trip_id)
  return tripIdsAtOrigin
}
