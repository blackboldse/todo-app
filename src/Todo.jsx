import React from "react";
import "./Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Todo(props) {
  return (
    <li className="todo-item">
      <span className="todo-item-wrapper">
        <label>
          <input className="todo-item-checkbox" type="checkbox" />
        </label>
        <span className="todo-item-title">{props.text}</span>
        <div className="more">
          <div className="icon-wrapper more-toggle">
            <DeleteIcon color="action" />
          </div>
        </div>
      </span>
    </li>
  );
}
