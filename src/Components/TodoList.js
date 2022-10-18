import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import * as React from "react";
import "../css/TodoList.css";
import { MoreHoriz, MoreHorizOutlined } from "@mui/icons-material";

export default function TodoList(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
            <MenuItem className="MenuItem" onClick={handleClose}>
              Delete
            </MenuItem>
          </Menu>
        </ListItem>
      </List>
    </div>
  );
}
