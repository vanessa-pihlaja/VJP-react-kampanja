import React, { useState } from "react";
import { TodoItem } from "./tarina";
import "./styles.css"
// Tuo tähän elementtiin propsina todo-listasi elementit.
// Tuota lista divin sisälle listan map-funktiolla. Jokainen
// listan elementti on TodoItem-komponentti, joka löytyy
// TodoItem.jsx-tiedostosta.
export default function (props) {
  const design = {
    paddingLeft: 0
  };
  const listItems = props.listItems.map((item) => (
    <ul key={item.text} design={design}>
      <TodoItem
        value={item.text}
        markDone={props.markDone}
        design={item.status}
      />
    </ul>
  ));
  return (
    <div>
      <ul className = "tarinalista">{listItems}</ul>
    </div>
  );
}