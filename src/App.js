import React, { useState } from 'react';

import './App.css';
import Car from'./Slots.js';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}


function RenderStatus(){
  return (
    <div className="slotArray">
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
    </div>
  )
}

function App() {
  const forceUpdate = useForceUpdate();
  return (
    
    <div className="App">
      <h1><center>WELCOME TO THE SLOT MACHINE</center></h1>

        <RenderStatus/>

     
  <div class="vertical-center"><button onClick={forceUpdate}>Roll</button> </div>

        
    </div>
  );
}



export default App;
