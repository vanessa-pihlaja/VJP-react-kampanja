import React from "react";


export function TodoItem(props) {
 


  return (
    
    <div style={{ display: "flex"}}>
        <div
          className="tarina"
          style={{ textDecoration: props.design ? "line-through" : "none" }}
        >
          {props.value}
        </div>
    </div>
  );
}