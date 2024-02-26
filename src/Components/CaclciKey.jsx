import React, { useRef, useState } from 'react';
import './CaclciKey.css'

const CaclciKey = ({keys, updateInput, showResult}) => {
    const buttonVal = useRef(null)
    const [inputDataStr, setInputDataStr] = useState('')
    let operator = '+-*/'
    // const handleClick = ()=>{
    //     // let keys = buttonVal.current.textContent
    //     console.log(keys, keys==='=', keys==='C');
    //     console.log(inputDataStr)
    //     if (!(operator.includes(keys)&&inputDataStr[inputDataStr.length-1]===keys)){
    //     if(keys === 'C'){console.log('C clicked',inputDataStr); setInputDataStr((inputDataStr)=> inputDataStr=''); updateInput('')}
    //     else if(buttonVal.current.textContent === '='){console.log('= clicked'); inputDataStr&&showResult(eval(inputDataStr))}
    //     else{setInputDataStr((inputDataStr)=>inputDataStr+keys); console.log(inputDataStr+keys); updateInput(inputDataStr+keys)}}
    // }
    return ( <button ref={buttonVal} className='key'>{keys}</button> );
}
 
export default CaclciKey;