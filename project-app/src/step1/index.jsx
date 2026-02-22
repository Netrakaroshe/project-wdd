import React from "react";
import Addition from "./Addition";
import Multiplication from "./Multiplication";
import Division from "./Division";

let Calc = () => {
  return (
    <div>
      <p>Calculator App</p>
      <Addition />
      <Multiplication />
      <Division />
    </div>
  );
};

export default Calc;
