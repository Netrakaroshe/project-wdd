import React from 'react'

const Addition = () => {
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
