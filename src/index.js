const express = require('express');

const app = express();

app.use(express.json())

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log(query)
  return res.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ])
})

app.post("/courses", (req, res) => {
  const body = req.body
  console.log(body)

  return res.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ])
})

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  console.log(id)
  return res.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ])
})

app.patch("/courses/:id", (req, res) => {
  return res.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ])
})

app.delete("/courses/:id", (req, res) => {
  return res.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ])
})

app.listen(3000, () => console.log("Server is running!"))