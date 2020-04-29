import React, { Component } from 'react'


class Welcome extends Component{
  render(){
    return(
    <h2>Class Component welcomes {this.props.name} aka {this.props.heroName}</h2>
    )
  }
}

export default Welcome;
