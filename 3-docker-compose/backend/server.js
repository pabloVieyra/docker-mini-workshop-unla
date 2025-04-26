const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.get("/data", async (req, res) => {
  const { rows } = await pool.query("SELECT NOW() as time");
  res.json({ dbTime: rows[0].time });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
