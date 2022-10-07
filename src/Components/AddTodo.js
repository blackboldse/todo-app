import { FormControl, InputLabel, Input, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
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
import "./AddTodo.css";
import TodoList from "./TodoList";

export default function AddTodo(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

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

  const getTodo = async (e) => {
    e.preventDefault();
    // Add a new docs with a generated id
    await setDoc(doc(todosRef), {
      todo: input,
      status: "unchecked",
      timestamp: serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
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
            onClick={getTodo}
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
      {todos.map((todo) => (
        <TodoList key={todo.id} text={todo.todo} />
      ))}
    </div>
  );
}
