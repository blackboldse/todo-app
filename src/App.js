import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  doc,
  getDocs,
} from "firebase/firestore";
import db from "./firebase";
import { Container } from "@mui/material";
import Header from "./Header";
import { async } from "@firebase/util";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const todosRef = collection(db, "todos");

  const handleAddTodo = async (e) => {
    e.preventDefault();
    // if (input !== "") {
    //   await addDoc(todosRef, {
    //     todo: input,
    //     isCompleted: false,
    //     timeStamp: serverTimestamp(),
    //   });
    //   setTodos([...todos, input]);
    //   setInput("");
    // }
  };

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
    <Container>
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="FromTodo">
          <form action="submit">
            <input
              value={input}
              type="text"
              onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={handleAddTodo} type="submit">
              Add
            </button>
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
