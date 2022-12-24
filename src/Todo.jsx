import React from "react";
import "./Todo.css";

export default function Todo(props) {
  return <li className="todo__text">{props.text}</li>;
}
