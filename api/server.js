const express = require("express");
const questionsRouter = require("../questions/questions-router.js");

const server = express();

server.use(express.json());
server.use("/api/questions", questionsRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Advice Giver!");
});

module.exports = server;
