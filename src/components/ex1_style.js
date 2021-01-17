import React from 'react'
import Style from "./style.css"
export default function ex1_styles() {
    const style={
        contriner:{backgroundColor:'blue',height:100}
    }
    return (
        <div style={{backgroundColor:'grey',height:200}}>

            <div style={style.contriner}><h1>inline style</h1></div>

            <div className={"root"}><h1>class style</h1></div>
        </div>

    )
}
