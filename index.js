const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const path = require("path");
const User = require("./models/User");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");

dotenv.config(".env");

const app = express();
app.use(fileUpload());
app.use("/uploads/", express.static(path.join(__dirname, "uploads")));

const port = 3000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected");
});

app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(userRouter);
app.use(postRouter);

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
  const { username, password, name, email, phone, gender, location } = req.body;

  const user = new User({
    username,
    password,
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
