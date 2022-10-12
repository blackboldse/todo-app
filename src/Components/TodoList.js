import { List, ListItem, Checkbox, ListItemText } from "@mui/material";
import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <List>
        <ListItem key={props.todo.id} dense button>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary={props.todo} />
        </ListItem>
      </List>
    </div>
  );
};

export default TodoList;
