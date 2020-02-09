
const mongoose = require('mongoose');
const { Schema } = mongoose;

// const taskSchema = new Schema({
const productSchema = new Schema({
  name: String,
  description: String
})

mongoose.model('products', productSchema);

// name: String,
// title: String,
// category: String,
// description: String,
// due_by: String,
// created: String,
// status: String