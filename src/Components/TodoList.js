import {
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const todos = props.todos;
  return (
    <div>
      <List className="todo-list">
        <ListItem className="todo-list__item">
          <FormControlLabel control={<Checkbox />} label={""} />
          <ListItemText primary={props.text} />
        </ListItem>
      </List>
    </div>
  );
}

export default TodoList;
