const express = require("express");

const port = 5000;

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Advice Giver!");
});

server.listen(5000, () => {
  console.log("Server listening on port ${port}");
});
