import React from 'react'

const Division = () => {
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
