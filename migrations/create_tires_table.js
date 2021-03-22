exports.up = function (knex) {
  return knex.schema.createTable("tires", (table) => {
    table.increments().index();
    table.text("tiretype");
    table.float("size");
    table.text("grade");
    table.string("stock");
    table.integer("price");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("tires");
  // knex.schema.dropTable("tires");
};
