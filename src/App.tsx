import React from 'react';
import './App.css';
import SignIn from './Components/SignIn';

function App (){

  //tailwindcss, reactcomponents and typescript were implemented for the UI design 
  // Background is dependent on the system's default theme (light mode/dark mode)

  return (
      <div className ="App">
        <SignIn/>
      </div>
  );
 }
 export default App;

    