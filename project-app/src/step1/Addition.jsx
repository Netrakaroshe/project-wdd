import React from 'react'
import Button from './Button';
const Addition = ({x,y}) => {
  let add_click =() => {
    alert("add = " + (x+y));
  }
  return (
    
    <div>
      <p>This is Addition Component</p>
      <Button label={"Addition"} fn={add_click}/>
    </div>
  )
}

export default Addition
