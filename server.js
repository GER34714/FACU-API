// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Lista de números de WhatsApp y mensajes
const contactos = [
  { numero: "541132525913", mensaje: "Hola%20Facu,%20me%20creas%20un%20usuario%3F" },
  { numero: "541125127839", mensaje: "Hola%20Facu,%20quiero%20cargar%20fichas%21" },
  { numero: "5491167489037", mensaje: "Hola%20Facu,%20quiero%20jugar%20ya%21" }
];

// Endpoint dinámico
app.get("/api/whatsapp", (req, res) => {
  const random = Math.floor(Math.random() * contactos.length);
  res.json(contactos[random]);
});

// Render port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor API corriendo en puerto ${PORT}`);
});
