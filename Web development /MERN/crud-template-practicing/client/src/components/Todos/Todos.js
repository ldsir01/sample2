import React, { useEffect } from "react";
import Todo from "./Todo/Todo";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todoReducer);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>Todo list full stack</h1>
      <Todo />
    </div>
  );
};

export default Todos;
