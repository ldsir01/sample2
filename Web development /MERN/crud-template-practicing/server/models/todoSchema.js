import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }
})

const postTodo = mongoose.model("postTodo", todoSchema)
export default postTodo;