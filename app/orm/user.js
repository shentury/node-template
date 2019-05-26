const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  username: String,
  password: String
});
const model = mongoose.Model("user", schema);
module.exports = model;
