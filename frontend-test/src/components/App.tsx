import React from 'react';
import logo from '../logo.svg';
import '../Styles.css';

import RegisterCardForm from './RegisterCardForm';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
     <RegisterCardForm/>
     
    </div>
  );
}

export default App;
