const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({

  title: String,
  category: String,
  description: String,
  due_by: String,
  created: String,
  status: String
})

mongoose.model('tasks', taskSchema);

// name: String,
// title: String,
// category: String,
// description: String,
// due_by: String,
// created: String,
// status: String