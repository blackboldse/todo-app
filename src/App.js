import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import db from "./firebase";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (snapshot) => {
      let todosArray = [];
      snapshot.forEach((doc) => {
        todosArray.push({
          ...doc.data(),
          id: doc.id,
        });
        setTodos(todosArray);
      });
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, task) => {
    await updateDoc(doc(db, "todos", todo.id), { task: task });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div>
        <TodoForm />
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
