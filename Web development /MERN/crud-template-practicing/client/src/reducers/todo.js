export const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return todos.filter((todo) => todo._id !== action.payload);

    case "UPDATE_TODO":
      return todos.map((todo) =>
        action.payload._id === todo._id ? action.payload : todo
      );

    case "FEATCH_ALL":
      return action.payload;

    case "CREATE_TODO":
      return [...todos, action.payload];

    default:
      return todos;
  }
};
