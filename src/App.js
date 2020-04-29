

import React from "react";
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
// import NamesList from './components/NamesList';
// import Person from './components/Person';



class App extends React.Component {

    render(){
      return (
        <div className="App">
        </div>
        // <NamesList />
        // <UserGreeting />
        // <EventBind />
        //<ClassClick />
        // {<Counter />
        // <FunctionClick />
        // demonstraighting passing props via function components
          // <Greet name='Jesslin' heroName='Wonder Woman'>
          //   <p>This is children props</p>
          // </Greet>
          // <Greet name='William'heroName='Batman'>
          //   <button>Action</button>
          // </Greet>
          // <Greet name='Jacob' heroName='Superman'/>
          // // demonstraighting passing props via class components
          //
          // <Welcome name='Jesslin' heroName='Wonder Woman'/>
          // <Welcome name='William'heroName='Batman'/>
          // <Welcome name='Jacob' heroName='Superman'/>

        // <Message />
    )
  }
}

export default App;
