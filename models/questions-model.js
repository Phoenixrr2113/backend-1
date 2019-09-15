const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  //addQuestion,
  remove,
  update
};

function find() {
  return db("questions").select("*");
}

function findById(id) {
  return db("questions")
    .where({ id })
    .first();
}

function remove(id) {
  return db("questions")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("questions")
    .where({ id })
    .update(changes, "*"); // adds an astrix to show a change was made
}
