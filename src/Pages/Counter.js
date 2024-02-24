import React, { useState } from 'react';
const Counter = () => {
    const[countVal, setCountVal] = useState(0)
    return ( 
        <div className='CounterContainer'>
            <h1>Counter App</h1>
            <p>Count: {countVal}</p>
            <div className='buttonContainer'>
                <button onClick={()=>{setCountVal((countVal)=>countVal+1)}}>Increment</button>
                <button onClick={()=>{setCountVal((countVal)=>countVal-1)}}>Decrement</button>
            </div>
        </div>
     );
}
 
export default Counter;