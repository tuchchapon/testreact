import React, { useState } from 'react'
import CounterClassComponent from "./CounterClassComponent"
import CounterFunctionalComponent from "./CounterFunctionalComponent"

export default () =>{
  let var1 =0;
  const [count, setCount] = useState(0)
  return (
    <div>
      JSX
      <h1>count :{count}</h1>
      <button onClick={()=>{
        setCount (count +1)
      }}>add</button>
      <CounterClassComponent/>
      <CounterFunctionalComponent/>
    </div>
  );
}