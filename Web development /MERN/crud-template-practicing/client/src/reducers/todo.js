export const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case "FEATCH_ALL":
      return action.payload;

    case "CREATE_TODO":
      return [...todos, action.payload];

    default:
      return todos;
  }
};
