const express = require("express");
// require('dotenv')

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.get("/", (_req, res) =>
  res.status(200).send("O Bruce é muito Inteligente!")
);
app.get("/port", (_req, res) => res.status(200).json({ ok: true, port: PORT }));
app.get("/env", (_req, res) =>
  res.status(200).json({ ok: true, env: NODE_ENV })
);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
