import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me {count}</button>
    </div>
  );
}

export default App;
