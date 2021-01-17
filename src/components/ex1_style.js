import React from "react";
import "./style.css";

export default function ex1_style() {
  const style = {
    container: { backgroundColor: "green", height: 320 },
  };
  return (
    
   /*inline style */  
   <div style={style.container}> 
      <h1>inline style </h1>
    
     
     {/**class style */} 
     <div className="root">
        <h1>class style</h1>
      </div>
    </div>
  );
}
