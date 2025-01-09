const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:ggXHEvsGhREBtzyBOtRiehmYQGKQUDXt@roundhouse.proxy.rlwy.net:50082/railway",
  ssl: {
    rejectUnauthorized: false, // You may need this for SSL connections in some cases
  },
});

module.exports = pool;
