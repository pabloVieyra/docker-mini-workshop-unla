const express = require("express");
const { Pool } = require("pg");
const cors = require("cors"); // Añade este paquete

const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors());

// Conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

// Verifica conexión a la base de datos
pool
  .connect()
  .then(() => console.log("Conectado a PostgreSQL"))
  .catch((err) => console.error("Error de conexión a PostgreSQL:", err));

// Ruta /data con manejo de errores
app.get("/data", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT NOW() as time");
    res.json({
      dbTime: rows[0].time,
      status: "success",
    });
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({
      error: "Error al consultar la base de datos",
      details: error.message,
    });
  }
});

// Ruta de salud para verificar que el backend funciona
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
