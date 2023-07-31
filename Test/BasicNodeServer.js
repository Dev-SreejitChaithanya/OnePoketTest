require("dotenv").config();
const express = require("express");
const app = express();

//any requests to localhost:3000 will return with "Hello,World !"
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//listen to a port described in the .env file
app.listen(process.env.PORT, () => {
  console.log(`Server running on port : ${process.env.PORT}`);
});
