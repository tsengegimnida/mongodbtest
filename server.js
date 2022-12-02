const app = require("./app");
const port = 3000;

if (MONGODB_URL) mongoose.connect(MONGODB_URL);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
