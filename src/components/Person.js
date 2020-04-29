import React from 'react';

const Person = (props) => {


  return (
    <div>
      <h2>{props.person.name}. I am {props.person.age}</h2>
    </div>
  )
}

export default Person;
