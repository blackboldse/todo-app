import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const todos = props.todos;
  return (
    <div>
      <List className="todo-list">
        <ListItem>
          <ListItemText primary={props.text} secondary="Dummy Important ⏰" />
        </ListItem>
      </List>
    </div>
  );
}

export default TodoList;
