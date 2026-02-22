import { useState } from "react";
import Stationary from "./Stationary";
import Electricity from "./Electricity";
import Telephone from "./Telephone";

let BudgetCalculatorApp = () => {
    let [bill, setBill] = useState();
    let [electricity, setElectricity] = useState();
    let [phone, setPhone] = useState();
    let [stationary, setStationary] = useState();
    return(
        <div>
            <Telephone />
            <Stationary />
            <Electricity />
        </div>
    )
}

export default BudgetCalculatorApp;