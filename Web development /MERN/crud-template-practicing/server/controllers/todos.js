import postTodo from '../models/todoSchema.js';


export const getTodos = async (req, res) => {
    try {
        const todos = await postTodo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createTodo = async (req, res) => {
    const todo = req.body;
    const newTodo = new postTodo(todo);

    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
