import React, { useState } from "react";

// Voit käyttää näitä tyylejä elementeille jos tahdot.
import "styles.css";

// Todo-listalle tehdään uusia merkintöjä input-elementin avulla.
// Elementtiin tehdään testikenttä, joka tallentaa sisältönsä
// state-hookiin, ja nappi, joka lukee sisällön ja kutsuu
// komponenttiin propseissa tuotua addListItem-funktiota.
export default function AddInput(props) {
  // Tee tähän kontrolloitu tekstikenttä ja lisää-nappi.
  // Lisää voit lukea esimerkiksi tästä blogipostauksesta:
  // https://dev.to/stanleyjovel/simplify-controlled-components-with-react-hooks-23nn
  // Tein tätä varten myös hyvin yksinkertaisen esimerkin,
  // jota saa käyttää yksikertaisen kontrolloidun komponentin
  // pohjana:
  // https://codesandbox.io/s/controlled-example-9s7cz
  // Tyylittelyyn löytyy luokkia oheisesta css-tiedostosta.

  function Input(props) {
    const [itemName, setItemName] = useState("");
    return (
      <label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={() => props.onSubmit(itemName)}>Lisää</button>
      </label>
    );
  }

  return (
    <div className="input-container">
      <Input onSubmit={(value) => props.addListItem(value)} />
    </div>
  );
}