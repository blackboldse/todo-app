import React, { useEffect, useState } from "react";
import db from "./firebase";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import "./App.css";

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
      <Header />
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
