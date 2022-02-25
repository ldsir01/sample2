import React, { useEffect, useState } from "react";
import Todo from "./Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { List } from "@mui/material";
import { createTodo } from "../../actions/todo";

const Todos = () => {
  const todos = useSelector((state) => state.todoReducer);
  const [todoData, setTodoData] = useState({
    id: "",
    title: "",
    completed: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // console.log(todos);

  // if (!todos) return "Loading ... ";

  // console.log(todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoData);
    setTodoData({ ...todoData, title: "" });

    dispatch(createTodo(todoData));
  };

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
        <input
          type="text"
          placeholder="Add Todo"
          value={todoData.title}
          onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
};

export default Todos;
