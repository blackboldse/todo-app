import { List, ListItem, Checkbox, ListItemText } from "@mui/material";
import React from "react";
import "../css/TodoList.css";

const TodoList = (props) => {
  return (
    <div>
      <List className="todo-list">
        <ListItem className="todo-list-item">
          <Checkbox className="todo-list-item-check" />
          <ListItemText primary={props.todo} className="todo-list-item-text" />
        </ListItem>
      </List>
    </div>
  );
};

export default TodoList;
