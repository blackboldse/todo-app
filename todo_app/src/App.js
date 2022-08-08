import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Reading You Dont Know JS",
    "Learning JavaScript",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello react TODO app 👋</h1>
      {/* update conmmit refers */}
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
