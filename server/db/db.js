const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:ggXHEvsGhREBtzyBOtRiehmYQGKQUDXt@roundhouse.proxy.rlwy.net:50082/railway",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
