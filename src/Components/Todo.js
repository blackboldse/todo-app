import React, { useState } from "react";
import db from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

function Todo() {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input !== "") {
      await setDoc(doc(collection(db, "todos")), {
        input,
        completed: false,
        timestamp: serverTimestamp(),
      });
      setInput("");
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="todo-input">Add a todo get started</label>
          <input
            id="todo-input"
            type="text"
            value={input}
            onChange={handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
}

export default Todo;
