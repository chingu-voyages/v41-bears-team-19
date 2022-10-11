const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  dueDate: { //New
    type: String,
    required: false,
  },
  status: { //New
    type: String,
    default: "Not Started",
    required: false,
  },
  team: { //New
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
