import * as mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  todoMessage: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
