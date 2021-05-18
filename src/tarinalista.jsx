import React, { useState } from "react";
import { TodoItem } from "./tarina";
// Tuo tähän elementtiin propsina todo-listasi elementit.
// Tuota lista divin sisälle listan map-funktiolla. Jokainen
// listan elementti on TodoItem-komponentti, joka löytyy
// TodoItem.jsx-tiedostosta.
export default function (props) {
  const design = {
    paddingLeft: 0
  };
  const listItems = props.listItems.map((item) => (
    <li key={item.text} design={design}>
      <TodoItem
        value={item.text}
        markDone={props.markDone}
        design={item.status}
      />
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}