import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import fetchEverything from '../actions/composedActions'
//import  testAction from '../actions/testAction'

class DefaultContainer extends Component {
  constructor(props){
  	super(props)
  	this.state = {}
    const {dispatch} = props
    //dispatch(fetchEverything())
    //dispatch(testAction('hello'))
  }
  render(){
    return(
      <div>
        <h3> Default Redux Connected Component</h3>
      </div>
    )
  }
}

const DefaultSuperContainer = connect()(DefaultContainer)

export default DefaultSuperContainer
