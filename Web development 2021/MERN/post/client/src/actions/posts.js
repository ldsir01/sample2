import * as api from "../api";

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.featchPost();
    dispatch({ type: "FEATCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(data);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
