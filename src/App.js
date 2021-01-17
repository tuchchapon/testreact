import React, { useState } from 'react'
import CounterClassComponent from "./CounterClassComponent"
import CounterFunctionalComponent from "./CounterFunctionalComponent"
import Ex1_styles from "./components/ex1_style"

export default () =>{
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
      <Ex1_styles/>
    </div>
  );
}