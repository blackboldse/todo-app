import { Checkbox, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "../css/TodoList.css";

function TodoList(props) {
  return (
    <div>
      <List className="todo-lists">
        <ListItem className="todo-item">
          <Checkbox className="todo-item-checkbox" />
          <ListItemText primary={props.todo} secondary="Agent IMportant ⏰" />
        </ListItem>
      </List>
    </div>
  );
}

export default TodoList;
