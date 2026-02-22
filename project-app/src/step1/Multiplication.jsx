import Button from './Button';


let Multiplication = ({x,y}) => {
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