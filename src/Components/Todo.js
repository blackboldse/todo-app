import React, { useState } from "react";
import {
  CheckBox,
  DeleteForeverRounded,
  EditRounded,
} from "@mui/icons-material";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTask, setNewTask] = useState(todo.task);
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewTask(todo.task);
    } else {
      todo.task === "";
      setNewTask(e.target.value);
    }
  };
  return (
    <div className="todo">
      <div>
        <button className="btn-complete" onClick={() => toggleComplete(todo)}>
          <CheckBox id="i" />
        </button>
        <button className="btn-edit" onClick={() => handleEdit(todo, newTask)}>
          <EditRounded id="i" />
        </button>
        <button className="btn-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteForeverRounded id="i" />
        </button>
      </div>
      <input
        type="text"
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.task === "" ? newTask : todo.task}
        className="todo-list"
        onChange={handleChange}
      />
    </div>
  );
}
