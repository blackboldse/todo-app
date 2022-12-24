import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./App.css";
import Todo from "./Todo";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import db from "./firebase";
import { async } from "@firebase/util";
import { DockSharp } from "@mui/icons-material";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const todosRef = collection(db, "todos");

  const handleAddTodo = async (e) => {
    e.preventDefault();
    await addDoc(todosRef, {
      todo: input,
      isCompleted: false,
      timeStamp: serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput("");
  };

  useEffect(() => {
    onSnapshot(todosRef, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });

    // const getTodos = async () => {
    // const data = await getDocs(todosRef);
    // setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(data);
    // };
    // getTodos();
  }, []);

  return (
    <div className="App">
      <Header />
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
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}
