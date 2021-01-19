import React from "react";
import "./style.css";

export default function ex1_style() {
  const style = {
    container: { backgroundColor: "green", height: 100 }
  };
  return (

    <div style={{backgroundColor:'red'}}>
     
   {/* inline style */}
   <div style={style.container}> 
      <h1>inline style </h1></div>
    
     
     {/**class style */} 
     <div className="root">
        <h1>class style</h1>
      </div>
    </div>
  );
}
