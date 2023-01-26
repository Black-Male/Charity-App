import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './login';
import { Register } from './register';

function App() {
  const[currentform, setCurrentForm]=useState("Login")

  const toggleForm=(forName)=>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
     {
     currentform === "Login"? <Login onformSwitch={toggleForm}/> : <Register onformSwitch={toggleForm}/>
     }
     
    </div>
  );
}

export default App;
