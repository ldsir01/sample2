import axios from "axios";

const url = "https://todo-curd.herokuapp.com/todo";

export const featchTodos = () => axios.get(url);
export const createTodo = (todo) => axios.post(url, todo);
export const updateTodo = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
