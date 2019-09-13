const express = require("express");
const db = require("./data/db-config.js");
const server = express();
server.use(express.json());

//get questions
server.get("/api/questions", async (req, res) => {
  try {
    const questions = await db("questions");
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET a question by id
server.get("/api/questions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [question] = await db("questions").where({ id });
    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({
        message: "Could not find the specified food item in database 🤷‍"
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error retrieving the requested info from database 💩",
      error: err
    });
  }
});

// post question
server.post("/api/questions", async (req, res) => {
  try {
    const [id] = await db("questions").insert(req.body);

    const question = await db("questions")
      .where({ id })
      .first();

    res.status(201).json(question);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Export router 🚀
module.exports = router;
