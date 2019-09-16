const server = require("./api/server.js");

const PORT = process.env.PORT || 4000;
console.log(PORT);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
