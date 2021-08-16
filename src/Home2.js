import './Home2.css'

import React, { Component,useState } from 'react';



function Home2(){
    const state = useState();

    const [count,setCount]=useState(10);

    const a=()=>{
        setCount(count+10)
        console.log("hello ")
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={a}>Click</button>
        </>
    )
}

export default Home2;