const { Pool } = require("pg");

const pool = new Pool({
  user: "joaocorreia",
  host: "localhost",
  database: "inventory_app",
  password: "Jpscyeshuajc25+",
  port: 5432,
});

module.exports = pool;
