import React from 'react';
// import Person from './components/Person';

const NamesList = (props) => {

  const persons = [
    {
    id: 1,
    name:'Brad',
    age: 30,
    skill: 'React'
    },
    {
      id: 2,
      name:'Clark',
      age: 34,
      skill: 'Vue'
    },
    {
      id: 1,
      name:'Diana',
      age: 43,
      skill: 'Angular'
     }
   ]
   const personList = persons.map(person => <Person person={person} key={person.id} />)
   return (
    <div>
      {personList}
    </div>
    )
}


export default NamesList;
