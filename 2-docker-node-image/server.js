// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>¡Prueba Unla !</h1>
    <p>Este es un servidor Node.js en un contenedor Docker</p>
  `);
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    message: "El servidor está funcionando correctamente",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`Visita http://localhost:${PORT}`);
});
