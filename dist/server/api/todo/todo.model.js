"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
    todoMessage: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
});
var Todo = mongoose.model('Todo', todoSchema);
exports.default = Todo;
//# sourceMappingURL=todo.model.js.map