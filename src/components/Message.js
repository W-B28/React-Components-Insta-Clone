import React, { Component } from 'react'


class Message extends Component{
  constructor(){
    super();
    this.state = {
      message: 'Message Component: Welcome visitor from state'
    }
  }

changeMessage() {
  this.setState({
    message:"Thank you for subscribing"
  })
}

  render(){
    return(
    <>
      <h2>{this.state.message}</h2>
      <button onClick={()=> this.changeMessage()}>Subscribe</button>
    </>
    )
  }
}

export default Message;
