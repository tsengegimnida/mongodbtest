const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
const port = 3000;
const MONGODB_URL =
  "mongodb+srv://gansukh:UgfKbthWjNdxx8MO@cluster0.6xeqn30.mongodb.net/leap3?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected");
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/profile", (req, res) => {
  const { name, email, phone, gender, location } = req.body;

  const user = new User({
    name,
    email,
    phone,
    gender,
    location,
  }).save();

  res.send({
    message: "Saved",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
