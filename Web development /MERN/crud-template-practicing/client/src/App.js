import React, { useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";
import { useDispatch } from "react-redux";
import { getTodos } from "./actions/todo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <Todos />
    </>
  );
}

export default App;
