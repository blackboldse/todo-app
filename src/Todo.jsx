import Header from "./Header";
import React from "react";
import "./Todo.css";
import { Container } from "@mui/system";

export default function Todo(props) {
  return <li className="todo__text">{props.text}</li>;
}
