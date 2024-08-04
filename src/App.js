import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message , type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togglemode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar title = "textutils" mode ={mode} togglemode ={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading = "Enter your Text to analyze" mode ={mode}/>
    </div>
    </>
  );
}

export default App;
