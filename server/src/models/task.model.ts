const { Schema, model } = require("mongoose");
const taskSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const TaskModel = model("tasks", taskSchema);
module.exports = TaskModel;
