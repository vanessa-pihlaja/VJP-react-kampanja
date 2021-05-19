import React, { useState } from "react";
import { Tarina } from "./tarina";
import "./styles.css"

export default function (props) {
  const design = {
    paddingLeft: 0
  };
  const listItems = props.listItems.map((item) => (
    <ul key={item.text} design={design}>
      <Tarina
        value={item.text}
      />
    </ul>
  ));
  return (
    <div>
      <ul className = "tarinalista">{listItems}</ul>
    </div>
  );
}