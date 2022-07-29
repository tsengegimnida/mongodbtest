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

app.get("/user/list", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});
app.get("/profile/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.send(user);
});
app.delete("/profile/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.send("deleted");
});
app.patch("/profile/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, gender, location } = req.body;

  console.log(id);
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
  } catch (e) {
    console.log(e);
  }
  res.send("Updated");
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
