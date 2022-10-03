import { Checkbox, List, ListItem } from "@mui/material";
import React from "react";
import "../css/TodoList.css";

function TodoList(props) {
  const todos = props.todos;

  const handleStrikethrough = (e) => {
    e.target.style.textDecoration
      ? e.target.style.removeProperty("text-decoration")
      : e.target.style.setProperty("text-decoration", "line-through");
  };

  return (
    <div>
      <List className="todo-lists">
        <ListItem className="todo-item">
          <Checkbox
            className="todo-item-checkbox"
            onClick={handleStrikethrough}
          />
          {props.text}
        </ListItem>
      </List>
    </div>
  );
}

export default TodoList;
