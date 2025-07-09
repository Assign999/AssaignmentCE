import React ,{useState, useEffect}from 'react'

const Timer=()=>{
    const[sec,setSec]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=> setSec(s=>s+1),1000);
        return()=> clearInterval(timer);

    },[]);
    return <p>Component open for {sec} seconds</p>
}
export default Timer;