const post = (posts = [], action) => {
  switch (action.type) {
    case "ADD":
      return posts;

    default:
      return posts;
  }
};

export default post;
