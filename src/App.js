import React, { useEffect, useState } from "react";
import db from "./firebase";
import Header from "./Components/Header";
// import TodoList from "./Components/TodoList";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  ListItem,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  orderBy,
  query,
} from "firebase/firestore";

import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const todosRef = collection(db, "todos");
  const q = query(todosRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          uniqueId: doc.id,
          todo: doc.data().todo,
        }))
      );
    });
  }, []);

  const AddTodo = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id
    await setDoc(doc(todosRef), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <Header />
      <form className="formList">
        <FormControl className="formControl">
          <InputLabel className="italic">Add todo get started Today</InputLabel>
          <Input
            className="formInput"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            onClick={AddTodo}
            disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddCircleIcon />}
          >
            New Todo
          </Button>
        </FormControl>
      </form>
      <ul className="lists">
        {todos.map((todo) => (
          <ListItem key={todo.id}>{todo.todo}</ListItem>
        ))}
      </ul>
    </div>
  );
}
