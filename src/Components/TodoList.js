import { List, ListItem, Checkbox, ListItemText } from "@mui/material";
import React from "react";
import "../css/TodoList.css";

const TodoList = (props) => {
  return (
    <div>
      <List className="list">
        <ListItem className="list-todo">
          <Checkbox />
          <ListItemText primary={props.todo} />
        </ListItem>
      </List>
    </div>
  );
};

export default TodoList;
