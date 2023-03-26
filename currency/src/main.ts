import express from "express";
import pgp from "pg-promise";

const app = express();

app.get("/currency/:month/:year", async function (req, res) {
  res.json({
    usd: 3,
    eur: 5,
  });
});

app.listen(3001);
