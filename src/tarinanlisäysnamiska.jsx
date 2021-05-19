import React, { useState } from "react";

export default function AddInput(props) {

  function Input(props) {
    const [itemName, setItemName] = useState("");
    return (
      <label className ="inputfield">
        <textarea
          type="text"
          rows="10"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={() => props.onSubmit(itemName)}>Jaa</button>
      </label>
    );
  }

  return (
    <div className="input-container">
      <Input onSubmit={(value) => props.addListItem(value)} />
    </div>
  );
}