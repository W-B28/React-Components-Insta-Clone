import React, { Component } from 'react'


class EventBind extends Component{
  constructor(){
    super();
    this.state = {
      message: 'Hello'
    }
    this.clickHandler=this.clickHandler.bind(this)
  }
clickHandler() {
  this.setState({
    message: 'Goodbye'
  })
}

  render(){
    return(
      <>
      <div>{this.state.message}</div>
      <button onClick={this.clickHandler}>click</button>
      </>
    )
  }
}

export default EventBind;
