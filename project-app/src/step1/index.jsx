import React, { useState } from "react";
import Addition from "./Addition";
import Multiplication from "./Multiplication";
import Division from "./Division";
import Subtraction from "./subtraction";


let Calc = () => {
    let [x,setX] = useState(0);
    let [y,setY] = useState(0);


  return (
    <div>
         <div className="flex justify-center">
                <div className="border-3 border-blue-900 rounded-xl shadow-2xl m-4 w-1/4">
                    <h1 className="bg-blue-900 text-center text-xl text-white rounded-t-md">Calculator App</h1>
                    <div className="flex">
                        <input onChange = {e=>{setX(Number(e.target.value))}} type="text" className="border-1 border-blue-800 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num1" />
                        <input onChange = {e=>{setY(Number(e.target.value))}} type="text" className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num2" />
                    </div>
                </div>
            </div>
      <p>Calculator App</p>
      <Addition x={x} y={y}/>
      <Subtraction x={x} y={y}/>
      <Multiplication  x={x} y={y}/>
      <Division x={x} y={y}/>
    </div>
  );
};

export default Calc;
