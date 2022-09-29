import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

function TodoList(props) {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={props.text} secondary="Important❗" />
        </ListItem>
      </List>
    </div>
  );
}

export default TodoList;
