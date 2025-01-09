import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://postgres:ggXHEvsGhREBtzyBOtRiehmYQGKQUDXt@roundhouse.proxy.rlwy.net:50082/railway",
});

export default pool;
