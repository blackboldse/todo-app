import { Checkbox, Input, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const todos = props.todos;

  const handleStrikethrough = (e) => {
    e.target.style.textDecoration
      ? e.target.style.removeProperty("text-decoration")
      : e.target.style.setProperty("text-decoration", "line-through");
  };

  return (
    <div>
      <List className="lists">
        <ListItem className="list__items">
          <Checkbox className="list__checkbox" />
          <ListItemText onClick={handleStrikethrough} primary={props.text} />
        </ListItem>
      </List>
    </div>
  );
}

export default TodoList;
