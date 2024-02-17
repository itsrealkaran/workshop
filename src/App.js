import "./App.css";
import React, { useState } from "react";
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
      <Header addItem={addItem} />
      {/* <List items={items} deleteItem={deleteItem} /> */}
    </div>
  );
}

export default App;
