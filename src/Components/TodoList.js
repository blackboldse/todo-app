import { Checkbox, Input, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const todos = props.todos;
  return (
    <div>
      <List className="list">
        <ListItem className="list__item">
          <Checkbox className="list__checkbox" />
          <ListItemText className="list__task" primary={props.text} />
        </ListItem>
      </List>
    </div>
  );
}

export default TodoList;
