import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import db from "./firebase";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const AddTodo = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id
    const todosRef = collection(db, "todos");
    await setDoc(doc(todosRef), {
      todo: input,
      // Timestamp:
    });
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h2 className="title">React TODO list app with Firebase 🔥</h2>
      <form className="formList">
        <FormControl className="FormControl">
          <InputLabel className="txt-italic">
            ✍️ Add todo get started Today
          </InputLabel>
          <Input
            className="FormInput"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            disabled={!input}
            type="submit"
            onClick={AddTodo}
            variant="contained"
            color="primary"
          >
            New Todo
          </Button>
        </FormControl>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoList text={todo} key={todo.toString()} />
        ))}
      </ul>
    </div>
  );
}
