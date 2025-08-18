const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

app.get("/films", async (req, res) => {
  try {
    const films = await Film.find();
    res.json(films);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
});

app.delete("/:id", async (req, res) => {
  const film = await Film.findByIdAndDelete(req.params.id);
  return res.send(film);
});

app.put("/:id", async (req, res) => {
  const film = await Film.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });
  return res.send(film);
});

app.post("/", async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });
  await film.save();
  res.send(film);
});

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.error("Erro ao conectar:", err));
  console.log(`Rodando na porta ${port}`);
});
