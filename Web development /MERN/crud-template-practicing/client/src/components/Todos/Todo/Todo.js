import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo, labelId }) => {
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
      <ListItemText id={labelId} primary={`${todo.title}`} />
    </ListItem>
  );
};

export default Todo;
