import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const togglemode = ()=>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#042743"
    }else{
      setmode("light");
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    <Navbar title = "textutils" mode ={mode} togglemode ={togglemode}/>
    <div className="container my-3">
    <Textform heading = "Enter your Text to analyze" mode ={mode}/>
    </div>
    </>
  );
}

export default App;
