import React, { useState } from "react";
import { Button } from "@material-ui/core";
import './App.css';


export default function App() {
  const [todos, setTodo] = useState(["Learning ReactJS"]);
  const [input, setInput] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    setTodo([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h2>Create a TODO app with Firebase 🔥</h2>
      <h3 className="subtitle">Add todo get started Today</h3>
      <form action="">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {/* <button onClick={handleAddTodo}>Add todo</button> */}
        <Button
          type='submit'
          variant='contained'
          color='primary'
          onClick={handleAddTodo}>Add todo</Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
