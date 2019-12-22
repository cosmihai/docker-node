const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    minlength: 6,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  completed: {
    type: Boolean,
    default: false
  },
  completDate: {
    type: Date
  }
});

const ToDo = mongoose.model('ToDo', todoSchema);
module.exports = ToDo;