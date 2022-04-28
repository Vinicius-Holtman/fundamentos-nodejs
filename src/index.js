const express = require('express');

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Enviado"})
})

app.listen(3000, () => console.log("Server is running!"))