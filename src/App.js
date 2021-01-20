import React, { useState } from 'react'
import CounterClassComponent from "./CounterClassComponent"
import CounterFunctionalComponent from "./CounterFunctionalComponent"
import EX1style from "./components/ex1_style"
import Ex2image from "./components/ex2_image"
import Ex3prop from "./components/ex3_props"
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
      <EX1style/>
      <Ex2image/>
      <Ex2image image="/images/1.jpg"/>
      <Ex3prop count={count} color="#f00"showLabel/>

    </div>
  );
}