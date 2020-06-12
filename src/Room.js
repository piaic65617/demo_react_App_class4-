import React, { useState } from 'react';
import './Room.css';

function Room() {
  // const faizan = useState(true);  
  // console.log("ssfs = ",faizan); 

  const [isLit, setLit] = useState(false);
  
  let [Age, setAge] = useState(45);

  // const updateLit = function (){
  //   console.log("Button Clicked");
  //   setLit(!isLit);
  // }
  // function increaseAge(){
  //   console.log("Age Incresed");
  //   setAge(++isAge);
  // }
  return (
     <div className ={`room ${isLit? "lit": "dark"}`}>
          This room is : {isLit? "Lit": "Dark"}
          <br /><br />
          <button onClick = {()=> setLit(!isLit)}>Toggle Button</button>
          <br /><br />
           Age: {Age}
           <br /><br />
          <button onClick = {()=> {
                            console.log("Increase age arrow function");
                            setAge(++Age);
                            }}>
              Increase Age
          </button>
     </div>
  );
}
export default Room;


