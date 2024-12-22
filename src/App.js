import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextAnalyzer from './Components/TextForm';
import React from "react";

function App(props) {
  const [mode,setmode] = useState('light');
  let toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
    }
  }
  
  return (
    <>
   
      <Navbar title='Text Analyzer App' mode={mode} toggle1={toggleMode}/>
      <TextAnalyzer mode={mode}/>
  </>
    
  );
}

export default App;











 


