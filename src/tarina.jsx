import React from "react";


export function Tarina(props) {
 
  return (
    
    <div style={{ display: "flex"}}>
        <div
          className="tarina"
        >
          {props.value}
        </div>
    </div>
  );
}