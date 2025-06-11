const mongoose = require('mongoose');

// Category schema
const categorySchema = new mongoose.Schema({
   name: { type: String,required: true},
   image: { type: String, required: true}
})

// Category model
const Category = mongoose.model('Category', categorySchema)

module.exports = Category;