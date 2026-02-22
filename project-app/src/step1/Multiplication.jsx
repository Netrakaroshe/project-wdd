
let Multiplication = () => {
     let mult_click =() => {
    alert("mult = " + (x*y));
  }
    return (
        <div>
            <p>This is multiplication component</p>
            <Button label={"Multiplication"} fn={mult_click}/>
        </div>
    )
}

export default Multiplication;