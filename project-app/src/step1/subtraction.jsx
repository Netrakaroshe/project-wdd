import React from 'react'
import Button from './Button';

let Subtraction = ({x,y}) => {
  let sub_click =() => {
    alert("sub = " + (x-y));
  }
  return (
    <div>
      <p>This is the subtraction page</p>
      <Button label={"Subtraction"} fn={sub_click}/>
    </div>
  )
}

export default Subtraction;
