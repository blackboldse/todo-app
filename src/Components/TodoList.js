import * as React from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import "../css/TodoList.css";
import db from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default function TodoList(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <List className="List">
      <ListItem className="ListItem">
        <Checkbox className="Checkbox" />
        <ListItemText primary={props.todo} className="ListItemText" />
        <MoreHoriz
          className="more active"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem className="MenuItem" onClick={handleClose}>
            Edit
          </MenuItem>
          <MenuItem className="MenuItem" onClick={handleDelete}>
            Delete
          </MenuItem>
        </Menu>
      </ListItem>
    </List>
  );
}
