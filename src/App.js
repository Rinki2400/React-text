import "./App.css";
import Navbar from "./componts/Navbar";
import TextForm from "./componts/TextForm";
import React, { useState } from 'react';


function App() {
  const [mode , SetMode] =useState('light');
  const toggleMode =() =>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.backgroundColor="#042743";

    }else{
      SetMode('light');
      document.body.style.backgroundColor="white";
    }
    
  }
  return (
    <>
      {/* <Navbar title="Rinki" name ="jdj"  /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading=" Enter the text to analysic below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
