const db = require("../database/dbConfig.js");

// Export functions 🚀
module.exports = {
  add,
  find,
  findBy,
  findById
};

// Functions ⚙️
function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}


// const db = require("../data/dbConfig.js");

// module.exports = {
//   add,
//   findBy
// }

// async function add(user) {
//   const [id] = await db("users").insert(user, "id");
//   return id;
// }

// function findBy(condition) {
//   return db("users").where(condition);
// }
