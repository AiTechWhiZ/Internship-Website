const mongoose = require('mongoose');

const techBlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  createdAt: { type: Date, required: true } // Updated to accept Date type
});

const TechBlogModel = mongoose.model('TechBlog', techBlogSchema);

module.exports = TechBlogModel;
