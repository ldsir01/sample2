import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    console.log(postMessage);
    res.send(postMessage);
    //200
  } catch (error) {
    res.json(error.message);
    //404
  }
};

export const createPost = async (req, res) => {
  const post = req.body();
  try {
    const newPost = new PostMessage(post);
    await newPost.save();
    res.json(newPost);
    //201
  } catch (error) {
    res.json(error.message);
    //409
  }
};
