const knex = require("knex");
const parse = require("pg-connection-string").parse;
let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}
const db = knex({
  client: "pg",
  connection: pgconfig || `postgres://frotwil@localhost/tirelist`,
  searchPath: "public",
});
module.exports = db;
