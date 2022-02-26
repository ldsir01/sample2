import React, { useState } from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";

import { useDispatch } from "react-redux";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { deleteTodo } from "../../../actions/todo";

const Todo = ({ todo, currentID, setCurrentID }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todo._id));
  };

  return (
    <ListItem disablePadding>
      <ListItemText primary={`${todo.title}`} />
      <IconButton aria-label="edit" onClick={() => setCurrentID(todo._id)}>
        <ModeEditIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={(e) => handleDelete(e)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default Todo;
