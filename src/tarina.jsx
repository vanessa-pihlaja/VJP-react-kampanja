import React from "react";



// Tässä komponentissa majailee yksittäinen listalla oleva
// elementti.
export function TodoItem(props) {
  // Voit toteuttaa tehtävän merkkaamisen
  // tehdyksi esimerkiksi lisäämällä tähän useState-hookin,
  // jossa on done-tieto boolean-arvona

  // Alle tuotat yksittäisen listalla olevan elementin renderöinnin.
  // Elementin tiedot tulevat komponenttiin props-muuttujassa.

  return (
    <div style={{ display: "flex" }}>
      <button className="button" onClick={() => props.markDone(props.value)}>
        <div
          className="todo-item"
          style={{ textDecoration: props.design ? "line-through" : "none" }}
        >
          {props.value}
        </div>
      </button>
    </div>
  );
}