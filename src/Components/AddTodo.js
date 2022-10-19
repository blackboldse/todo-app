import { FormControl, Input, Button, InputLabel } from "@mui/material";
import db from "../firebase";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./AddTodo.css";
import TodoList from "./TodoList";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const todosRef = collection(db, "todos");
  const q = query(todosRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
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
    <div>
      <form className="formList">
        <FormControl variant="outlined" className="formControl">
          <InputLabel
            sx={{ fontStyle: "italic", letterSpacing: 2, ml: 1 }}
            variant="standard"
          >
            Add a todo get started
          </InputLabel>
          <Input
            className="formInput"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            sx={{ textTransform: "capitalize" }}
            onClick={AddTodo}
            disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
          >
            <AddIcon />
          </Button>
        </FormControl>
      </form>
      {todos.map((todo) => (
        <TodoList todo={todo.todo} />
      ))}
    </div>
  );
}
