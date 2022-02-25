import * as api from "../api/index";

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.featchTodos();
    dispatch({ type: "FEATCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
