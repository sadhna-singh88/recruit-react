import React from 'react';
import '../Styles.css';

import RegisterCardForm from './RegisterCardForm';
import NavBar from './NavBar';



const App: React.FC=() => {
  //Using const username for now but this can come from user's login.Can be done later as improvement
  const username = 'Sadhna'
  return (
    <div className="App">
      <NavBar/>
     <RegisterCardForm username={ username}/>
     
    </div>
  );
}

export default App;
