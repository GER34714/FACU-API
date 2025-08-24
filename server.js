const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Ruta raíz
app.get("/", (req, res) => {
  res.send("API FCU-PLAY funcionando ✅");
});

// Ruta WhatsApp
app.get("/api/whatsapp", (req, res) => {
  res.json({
    numero: "541132525913",
    mensaje: "Hola Facu, me creas un usuario?"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});


// Render port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor API corriendo en puerto ${PORT}`);
});
