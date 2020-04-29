import React, { Component } from 'react'


class ClassClick extends Component{
clickHandler() {
  console.log('Click in class component')
}

  render(){
    return(
      <button onClick={this.clickHandler}>Click Class</button>
    )
  }
}

export default ClassClick;
