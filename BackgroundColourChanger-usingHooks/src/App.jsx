import React from 'react'
import "./App.css";
import { useState } from 'react';


function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className="main" style={{backgroundColor: color}}>
        <div className="container">
          <button id='red' onClick={ () => setColor("red")} >RED</button>
          <button id='green' onClick={ () => setColor("green")}>GREEN</button>
          <button id='ba' onClick={ () => setColor("wheat")}>BADAAM</button>
          <button id='pu' onClick={ () => setColor("purple")}>PURPLE</button>
        </div>
      </div>
  )
}

export default App