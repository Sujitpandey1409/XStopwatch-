import React, { useRef, useState } from 'react';
import './CaclciKey.css'

const CaclciKey = ({keys, updateInput, showResult}) => {
    const buttonVal = useRef(null)
    const [inputDataStr, setInputDataStr] = useState('')
    let operator = '+-*/'
    return ( <button ref={buttonVal} className='key'>{keys}</button> );
}
 
export default CaclciKey;