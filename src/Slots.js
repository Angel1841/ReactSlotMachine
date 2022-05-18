import React from 'react';
import './App.css';


class Car extends React.Component {
  constructor() {
    super();
    this.state = {color:"red"}
  }
  SpawnSlot(){
   
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    if(rand >=min && rand<25){
  
      this.state.color ="red";
    }
    else if(rand >=25 && rand< 50){
      this.state.color ="green";
    }else if(rand >=50 && rand < 75){
      this.state.color ="blue";
  
    }
    else if(rand >=75){
    this.state.color ="yellow";
  
  }  
  return(
    <div className="Slot" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
  render() {
    return(
      <div style={{display:"inline-block"}}>
      {this.SpawnSlot() }
      </div>
    )
  }
}

export default Car