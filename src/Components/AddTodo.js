import { FormControl, Input, Button } from "@mui/material";
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
import { uid } from "uid";
import { ref, set } from "firebase/database";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // const todosRef = collection(db, "todos");
  // const q = query(todosRef, orderBy("timestamp", "desc"));

  // useEffect(() => {
  //   onSnapshot(q, (snapshot) => {
  //     setTodos(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         todo: doc.data().todo,
  //       }))
  //     );
  //   });
  // }, []);

  const getTodo = (e) => {
    const uuid = uid();
    e.preventDefault();
    // Add a new docs with a generated id
    set(ref(db, `/${uuid}`), {
      input,
      uuid,
    });
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
      <form className="formList">
        <FormControl variant="outlined" className="formControl">
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
            // startIcon={<AddCircleIcon />}
          >
            New Todo
          </Button>
        </FormControl>
      </form>
      {todos.map((todo) => (
        <TodoList key={todo.uid} todo={todo.todo} />
      ))}
    </div>
  );
}
