import * as api from "../api/index";

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.featchTodos();
    dispatch({ type: "FEATCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo);
    dispatch({ type: "CREATE_TODO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTodo = (id, todo) => async (dispatch) => {
  try {
    const { data } = await api.updateTodo(id, todo);
    dispatch({ type: "UPDATE_TODO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);
    dispatch({ type: "DELETE_TODO", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
