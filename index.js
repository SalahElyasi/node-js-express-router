import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";
import recipesRoutes from "./routes/recipes.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.use("/recipes", recipesRoutes);

app.get("/", (req, res) => {
  res.send("Hello HomePage");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
