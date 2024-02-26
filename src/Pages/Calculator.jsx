import React, { useState } from 'react';
import CaclciKey from '../Components/CaclciKey';
import { calciKeys } from '../data';
import './Calculator.css'
const Calculator = () => {
    const [inputVal, setInputVal] = useState('')
    const [result, setResult] = useState()
    let operator = '+-*/'
    // const updateInput = (val)=>{setInputVal((input)=>result+val)}
    // const showResult = (val)=>{setResult((result)=>eval)}
    const handleClick = (e) => {
        let keyVal = e.target.textContent
        console.log(keyVal);
        console.log(calciKeys.join().includes(keyVal))
        if(calciKeys.join().includes(keyVal)){
        if (!(operator.includes(keyVal) && inputVal[inputVal.length - 1] === keyVal)) {
            if (keyVal === 'C') { console.log('C clicked', inputVal); setInputVal((inputVal) => inputVal = ''); setResult()}
            else if (keyVal === '=') { console.log('= clicked'); inputVal && setResult(eval(inputVal)) }
            else { setInputVal((inputVal) => inputVal + keyVal); console.log(inputVal + keyVal); }
        }}
    }
return (
    <div className="calculatorContainer">
        <h1>React Calculator</h1>
        <input type='text' value={inputVal} />
        {result && <p>{result}</p>}
        <div onClick={handleClick} className="keysContainer">
            {calciKeys.map((el, i) => <CaclciKey key={i} keys={el} />)}
        </div>
    </div>
);
}

export default Calculator;