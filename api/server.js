const express = require("express");
//listening on 5000
const port = 5000;

const server = express();

server.use(express.json());
//outputs the WELCOME
server.get("/", (req, res) => {
    res.send("Welcome to Advice Giver!");
});
//Makes sure we are listening
server.listen(5000, () => {
    console.log("Server listening on port ${port}");
});
