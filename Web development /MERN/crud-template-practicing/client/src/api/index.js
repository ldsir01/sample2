import axios from "axios";

const url = "http://localhost:5500/todo";

export const featchTodos = () => axios.get(url);

export const createTodo = (todo) => axios.post(url, todo);
