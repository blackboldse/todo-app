import React from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}
