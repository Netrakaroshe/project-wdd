import React from "react";
import Addition from "./Addition";
import Multiplication from "./Multiplication";

let Calc = () => {
  return (
    <div>
      <p>Calculator App</p>
      <Addition />
      <Multiplication />
    </div>
  );
};

export default Calc;
