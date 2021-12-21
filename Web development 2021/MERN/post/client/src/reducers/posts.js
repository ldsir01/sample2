const post = (posts = [], action) => {
  switch (action.type) {
    case "FEATCH_ALL":
      return action.payload;
    case "CREATE_POST":
      console.log(action.payload);
      return [...posts, action.payload];

    default:
      return posts;
  }
};

export default post;
