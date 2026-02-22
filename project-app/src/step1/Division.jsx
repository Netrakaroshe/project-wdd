import React from 'react'
import Button from './Button';

const Division = ({x,y}) => {
     let div_click =() => {
    alert("div = " + (x/y));
  }
  return (
    <div>
      <p>This is Division Component</p>
      <Button label={"Division"} fn={div_click}/>
    </div>
  )
}

export default Division;
