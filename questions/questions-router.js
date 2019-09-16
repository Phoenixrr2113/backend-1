const router = require("express").Router();
const Questions = require("../models/questions-model.js");
const db = require("../database/dbConfig.js");

// post question
router.post("/", async (req, res) => {
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

//get questions
router.get("/", async (req, res) => {
  try {
    const questions = await db("questions");
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET a question by id
router.get("/:id", async (req, res) => {
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

// PUT "/api/questions/:id" - edits a question from the Database. - make sure the user can only edit their own questions.
router.put("/:id", async (req, res) => {
  console.log("endpoint hit...");
  try {
    const question = await Questions.update(req.params.id, req.body);
    if (question) {
      res.status(200).json({ status: "Question has been updated" });
    } else {
      res.status(404).json({ message: "The question could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating the question"
    });
  }
});

// DELETE "/api/question/:id" - deletes a question from the Database. - make sure the user can only delete their own questions.
router.delete("/:id", async (req, res) => {
  try {
    const question = await Questions.remove(req.params.id);
    if (question > 0) {
      res.status(200).json({ Message: "The question has been deleted" });
    } else {
      res.status(404).json({ message: "the question could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error removing the Question"
    });
  }
});

// Export router 🚀
module.exports = router;
