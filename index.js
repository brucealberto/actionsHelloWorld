const express = require("express");
// require('dotenv')

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_req, res) =>
  res.status(200).send("O Bruce é muito Inteligente!")
);

app.listen(port, () => console.log(`Running on port ${port}`));
