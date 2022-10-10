import React from "react";
import { Checkbox, List, ListItem, ListItemText } from "@mui/material";
import "../css/TodoList.css";

export default function TodoList(props) {
  return (
    <div>
      <List className="todo-lists" key={props.id}>
        <ListItem className="todo-item">
          <Checkbox className="todo-item-checkbox" />
          <ListItemText primary={props.todo} />
        </ListItem>
      </List>
    </div>
  );
}
