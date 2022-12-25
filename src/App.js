import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import db from "./firebase";
import { Container, Input } from "@mui/material";
import Header from "./Header";
import { async } from "@firebase/util";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const todosRef = collection(db, "todos");

  const createTodo = async (e) => {
    e.preventDefault();
    if (input !== "") {
      await addDoc(todosRef, {
        todo: input,
        isCompleted: false,
        timeStamp: serverTimestamp(),
      });
    }
    // setTodos([...todos, input]);
    setInput("");
  };

  const updateTodo = async () => {};

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => e.preventDefault();

  useEffect(() => {
    // onSnapshot(todosRef, (snapshot) => {
    //   setTodos(snapshot.docs.map((doc) => doc.data().todo));
    // });

    const getTodos = async () => {
      const data = await getDocs(todosRef);
      onSnapshot(todosRef, (snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getTodos();
  }, []);

  return (
    <Container maxWidth="sm">
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="FromTodo">
          <form className="topInput" onSubmit={createTodo}>
            <input
              className="todo-input todo-new"
              placeholder="New todo"
              value={input}
              type="text"
              onChange={handleChange}
            />
          </form>
        </div>
        <ul>
          {todos.map((todo) => (
            <Todo text={todo.todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
