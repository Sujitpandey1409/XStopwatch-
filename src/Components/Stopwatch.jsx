import React, { useEffect, useState } from 'react';
import './Stopwatch.css'

const Stopwatch = () => {
    const [isStart, setIsStart] = useState(false)
    const [time, setTime] = useState(0)
    useEffect(()=>{
        let timerId;
        if(isStart){
        timerId = setInterval(() => {
            setTime((time)=>time+1)
        }, 1000);}
        else{clearInterval(timerId)}
        return ()=>clearInterval(timerId)
    },[isStart])
    let second = time%60
    let minute = Math.floor(time/60)    

    return ( 
        <div className="stopwatchContainer">
            <div className="stopwatch">
                <h1>Stopwatch</h1>
                {/* <p>Time:{time<60?`0:${time}`:`${time/60}:${time%60}`}</p> */}
                <p>Time: {`${minute}:${second<10?'0':''}${second}`}</p>
                <div className="buttonContainer">
                <button onClick={()=>setIsStart(!isStart)}>{isStart?'Stop':'Start'}</button>
                <button onClick={()=>setTime(0)}>Reset</button>
                </div>
            </div>
        </div>
     );
}
 
export default Stopwatch;