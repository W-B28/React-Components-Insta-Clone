import React from 'react';

const FunctionClick = () => {

  const clickHandler = () => {
    console.log("Button was clicked in clickhandler")
  }

  return (
    <div>
    <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick;
