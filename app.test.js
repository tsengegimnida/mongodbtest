const app = require("./app");
const request = require("supertest");
const mongoose = require("mongoose");

beforeAll(async () => {
  if (!process.env.MONGODB_URL) {
    process.env.MONGODB_URL = "mongodb://localhost:27017/leap3_test";
    mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection;

    connection.once("open", () => {
      console.log("Connected");
    });
  }
});

test("Test root path", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello World!");
});
