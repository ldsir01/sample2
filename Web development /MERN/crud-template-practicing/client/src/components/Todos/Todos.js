import React, { useEffect, useState } from "react";
import Todo from "./Todo/Todo";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const Todos = () => {
  const todos = useSelector((state) => state.todoReducer);
  const [checked, setChecked] = useState([0]);
  console.log(todos);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // if (!todos) return "Loading ... ";

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          // console.log(todo.title);
          const labelId = `checkbox-list-label-${todo}`;
          return <Todo key={todo._id} todo={todo} labelId={labelId} />;
        })}
      </List>
      <form>
        <input type="text" placeholder="Add Todo" />
      </form>
    </div>
  );
};

export default Todos;
