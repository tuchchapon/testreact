import React, { useState } from 'react'


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
    </div>
  );
}