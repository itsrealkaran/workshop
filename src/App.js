import "./App.css";
import Header from "./Header";
import List from "./List";

function App() {
  return (
    <div className="App">
      <Header addItem={addItem} />
      <List items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
