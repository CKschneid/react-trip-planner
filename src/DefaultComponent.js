import React, {Component} from 'react'

class DefaultComponent extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div>
        <h3 style={{color: '#B9A5BC'}}> This is a default component </h3>
      </div>
    )
  }
}

export default DefaultComponent
