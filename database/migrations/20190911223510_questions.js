exports.up = function(knex) {
  return knex.schema.createTable("questions", tbl => {
    tbl.increments();
    tbl.integer("user_id");
    tbl.string("Title", 128).notNullable();
    tbl.string("body", 256).notNullable();
    tbl.string("type-of-question").notNullable();
    tbl.string("photos");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("questions");
};
