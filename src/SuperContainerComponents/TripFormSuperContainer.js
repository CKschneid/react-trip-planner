import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import fetchEverything from '../actions/composedActions'
//import  testAction from '../actions/testAction'

class TripFormContainer extends Component {
  constructor(props){
  	super(props)
  	this.state = {
      originValue:'',
      destinationValue:''
    }
    const {dispatch} = props
    dispatch(fetchEverything())
    //dispatch(testAction('hello'))
    this.onOriginChange = this.onOriginChange.bind(this)
    this.onDestinationChange = this.onDestinationChange.bind(this)
  }
  onOriginChange(synthEvent){
    this.setState({originValue: synthEvent.target.value})
  }
  onDestinationChange(synthEvent){
    this.setState({destinationValue: synthEvent.target.value})
  }
  render(){
    const {stationNames} = this.props
    return(
      <div>
        <h3> Trip Form Container</h3>
        <form>
          <label htmlFor="originInput">Origin: </label> <br/>
          <input type="text"
                 id="originInput"
                 list="stationNames"
                 onChange={this.onOriginChange}
                 /> <br/>

          <label htmlFor="destinationInput">Destination: </label><br/>
          <input type="text"
                 id="destinationInput"
                 list="stationNames"
                 onChange={this.onDestinationChange}
                 /><br/>

          <datalist id="stationNames">
            {
              stationNames.map( stationName => (
                <option value={stationName} key={stationName}/>
              ))
            }
          </datalist>
          <span>origin value: {this.state.originValue},<br/>
                destination value: {this.state.destinationValue}<br/>
          </span>
          <button type="submit">
            <Link to={`tripView/${this.state.originValue}/${this.state.destinationValue}`}>Submit</Link>
          </button>

        </form>
      </div>
    )
  }
}
/*
<button type="submit" onClick={this.onSubmitEvent}>
  <Link to="/viewEvents">Submit Event</Link>
</button>
*/
const mapStatetoTripFormContainerProps = (state)=> {
    return ({
      stationNames: state.stationDirectory.map( station => station.stop_name)
    })
}
const TripFormSuperContainer = connect(mapStatetoTripFormContainerProps)(TripFormContainer)

export default TripFormSuperContainer
