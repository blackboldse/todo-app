import React from "react";
import "./Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";

export default function Todo(props) {
  const deleteTodo = async () => {
    const db = getFirestore();
    const todoDoc = doc(db, "todos", props.id);
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
        <span className="todo-item-title">{props.text}</span>
        <div className="icon-wrapper more-toggle">
          <button className="todo-item-delete btn-delete" onClick={deleteTodo}>
            <DeleteIcon color="action" />
          </button>
        </div>
      </span>
    </li>
  );
}
