import React, { useState } from "react";
import {
  CheckBox,
  DeleteForeverRounded,
  EditRounded,
} from "@mui/icons-material";
import "./Todo.css";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [input, setInput] = useState(todo.task);
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.completed === true) {
      setInput(todo.task);
    } else {
      todo.task = "";
      setInput(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input type="checkbox" />
      <p>{todo.todo}</p>
      {/* style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.task === "" ? newTask : todo.task}
        className="todo-list"
        onChange={handleChange} */}
      {/* <CheckBox
        className="btn btn-complete"
        onClick={() => toggleComplete(todo)}
        id="i"
      /> */}
      {/* <EditRounded
        className="btn btn-edit"
        onClick={() => handleEdit(todo, newTask)}
        id="i"
      />
      <DeleteForeverRounded
        className="btn btn-delete"
        onClick={() => handleDelete(todo.id)}
        id="i"
      /> */}
    </div>
  );
}
