  import React from "react";
  import "./styles.css";
  import TodoList from "./tarinalista";
  import AddInput from "./tarinanlisäysnamiska";
  import TodoItem from "./tarina";
  import { useState } from "react";
  import _ from "lodash";

  
  export default function App() {
    // Tee tähän reactin tilaan kytkeytyvä useState-hook,
    // joka pitää sisällään Todo-listan elementit. Lista voi
    // olla aluksi tyhjä ([]). Muista vaihtaa tämä uusi lista
    // myös TodoListin proppeihin!
  
    // Tähän kannattaa tehdä kaikki funktiot, joilla listaa
    // muokataan. Esim. listaan lisääminen, listasta poistaminen,
    // listaelementin siirtäminen. Funktiot voi lähettää muille
    // komponenteille propseina.
  
    // Allaolevaan rakenteeseen lisätään komponentit listaelementille
    // ja lisäyselementille.
    const [listItem, setListItem] = useState([]);
  
    function addListItem(item) {
      const newItemList = listItem.concat({ text: item, status: false });
      if (!listItem.some((x) => x.text === item)) {
        setListItem(newItemList);
      } else {
        console.log("Can't add duplicates!");
      }
    }
  
    function markDone(task) {
      const newList = [...listItem];
  
      const item = newList.find(({ text }) => text === task);
      console.log(item.status);
  
      item.status = !item.status;
      console.log(item.status);
      setListItem(newList);
    }
  
    return (
      <div className="App">
        <h1>TO-DO</h1>
        <TodoList listItems={listItem} markDone={(done) => markDone(done)} />
        <AddInput addListItem={addListItem} />
        <div className="doneMessage">
          {_.every(listItem, ["status", true]) ? "Done!" : "Not done :("}
        </div>
      </div>
    );
  }




/*export default App;*/
