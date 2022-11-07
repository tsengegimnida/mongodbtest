const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: "Please add title",
  },
  link: {
    type: String,
    // required: "Please add link",
  },
});
module.exports = mongoose.model("link", LinkSchema);
