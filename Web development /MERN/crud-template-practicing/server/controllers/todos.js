import postTodo from "../models/todoSchema.js";
import mongoose from "mongoose";

export const getTodos = async (req, res) => {
  try {
    const todos = await postTodo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const todo = req.body;
  const newTodo = new postTodo(todo);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  const { id: _id } = req.params;
  const todo = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "There is no todo with this ID" });

  const updatedTodo = await postTodo.findByIdAndUpdate(
    _id,
    { ...todo, _id },
    {
      new: true,
    }
  );

  res.json(updatedTodo);
};

export const deleteTodo = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "There is no todo with this ID" });

  await postTodo.findByIdAndRemove(_id);

  res.json({ message: "Todo deleted successfully" });
};
