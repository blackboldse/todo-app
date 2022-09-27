import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

export default function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const AddTodo = (e) => {
    e.preventDefault();
    setTodo([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h2>React TODO list app with Firebase 🔥</h2>
      <h3 className="Subtitle">Add todo get started Today</h3>
      <FormControl className="FormControl">
        <InputLabel className="txt-italic">Add todo</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button
          disabled={!input}
          type="submit"
          onClick={AddTodo}
          variant="contained"
          color="secondary"
        >
          New Todo
        </Button>
      </FormControl>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}
