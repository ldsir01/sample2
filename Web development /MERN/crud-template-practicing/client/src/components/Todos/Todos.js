import React, { useEffect, useState } from "react";
import Todo from "./Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { List } from "@mui/material";
import { createTodo, updateTodo } from "../../actions/todo";

const Todos = () => {
  const todos = useSelector((state) => state.todoReducer);
  const [currentID, setCurrentID] = useState(null);

  const todo = useSelector((state) =>
    currentID ? state.todoReducer.find((todo) => todo._id === currentID) : null
  );

  const [todoData, setTodoData] = useState({
    id: "",
    title: "",
    completed: false,
  });

  useEffect(() => {
    setTodoData(todo);
  }, [todo, currentID]);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoData);

    setTodoData({ ...todoData, title: "" });

    if (currentID) {
      dispatch(updateTodo(currentID, todoData));
      setCurrentID(null);
    } else {
      dispatch(createTodo(todoData));
    }
  };

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          const labelId = `checkbox-list-label-${todo}`;
          return (
            <Todo
              setCurrentID={setCurrentID}
              currentID={currentID}
              key={todo._id}
              todo={todo}
              labelId={labelId}
            />
          );
        })}
      </List>
      <form>
        <input
          type="text"
          placeholder="Add Todo"
          value={todoData ? todoData.title : ""}
          onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
        />
        <button onClick={(e) => handleSubmit(e)}>ADD</button>
      </form>
    </div>
  );
};

export default Todos;
