import React, {Component} from 'react'
import {Router, Route, browserHistory } from 'react-router'
import DefaultComponent from './DefaultComponent'
import DefaultSuperContainer from './SuperContainerComponents/DefaultSuperContainer'
import TripFormSuperContainer from './SuperContainerComponents/TripFormSuperContainer'
import TripViewSuperContainer from './SuperContainerComponents/TripViewSuperContainer'

export default class AppContainer extends Component {
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={DefaultComponent}/>
        <Route path="/connected" component={DefaultSuperContainer}/>
        <Route path="/tripForm" component={TripFormSuperContainer}/>
        <Route path="/tripView/:origin/:destination" component={TripViewSuperContainer}/>
      </Router>
    )
  }
}
