import React, { useState } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo, labelId }) => {
  const [checked, setChecked] = useState([0]);
  const handleToggle = (todo) => () => {
    const currentIndex = checked.indexOf(todo);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todo);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListItem
      key={todo.title}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(todo) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`${todo.title}`} />
      </ListItemButton>
    </ListItem>
  );
};

export default Todo;
