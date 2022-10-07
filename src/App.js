import React from "react";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
    </div>
  );
}
