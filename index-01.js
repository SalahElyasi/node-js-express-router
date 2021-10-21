const express = require("express")();
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/blogPosts", (req, res) => {
  res.status(200).send({
    name: "Salah",
    fname: "Elyasi",
  });
});

app.get("/blogPosts/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(418).send({ message: "We need a name!" });
  }

  res.send({
    fname: `mayname ${id} and fname of ${name}`,
  });
});

app.listen(PORT, () => console.log(`its alive on http://localhost:${PORT}`));
