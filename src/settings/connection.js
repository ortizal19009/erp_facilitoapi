const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "12345",
  database: "ErpEpmapaT_13",
  port: "5432",
});
module.exports = { pool };
