import React from "react";
import "./Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import db from "../firebase";
import { useState } from "react";

export default function Todo(props) {
  const todoDoc = doc(db, "todos", props.id);
  const [input, setInput] = useState();
  const [newInput, setNewInput] = useState(props.todo.input);

  const updateTodo = async () => {
    const todoDoc = doc(db, "todos", props.id);
    await updateDoc(todoDoc, { input: props.todo });
  };

  const handleEdit = async (todo) => {};
  const handleDelete = async () => {
    const db = getFirestore();
    if (props.id === undefined) {
      return `Cannot reading undefined!`;
    }
    await deleteDoc(todoDoc);
  };

  return (
    <li className="todo-item">
      <span className="todo-item-wrapper">
        <label>
          <input className="todo-item-checkbox" type="checkbox" />
        </label>
        <span className="todo-item-title">{props.todo}</span>
        <div className="icon-wrapper more-toggle">
          <button className="todo-item-edit btn btn-edit">
            <EditIcon
              color="action"
              sx={{ marginRight: 2 }}
              className="btn-icon-edit"
              // onClick={() => handleEdit(todo, newInput)}
            />
          </button>
          <button
            className="todo-item-delete btn btn-delete"
            onClick={handleDelete}
          >
            <DeleteIcon color="action" className="btn-icon-delete" />
          </button>
        </div>
      </span>
    </li>
  );
}
