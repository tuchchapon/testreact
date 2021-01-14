import React from 'react'

export default function CounterFunctionalComponent() {
    //React Hook
    const [count, setCount] = React.useState(0)
    return (
        <div style={{backgroundColor:"red"}}>
        <h1>Counter Funtional Component</h1>
        <h3>counter:{count}</h3>
        <button onClick={() => setCount(count + 1)}>add</button>
    </div>
    )
}
