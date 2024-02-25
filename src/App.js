import "./App.css";
import React, { useState } from "react";
import Logo from "./logo.svg";
import Header from "./Header";
import List from "./List";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, { id: Date.now(), text }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <img src={Logo} alt="logo" className="App-logo"></img>
      <Header addItem={addItem} />
      <List items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
