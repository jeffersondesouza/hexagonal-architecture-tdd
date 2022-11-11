import express from "express";
import pgp from "pg-promise";
import axios from "axios";

const app = express();

app.get("/cards/:cardNUmber/invoices/:month/:year", async function (req, res) {
  const connection = pgp()(
    "postgres://postgres:duppoe@localhost:5432/hexagonalarq"
  );
  const transactions = await connection.query(
    "select * from cards.card_transaction where card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3",
    [req.params.cardNUmber, req.params.month, req.params.year]
  );

  const response = await axios.get("http://localhost:3001/currency");
  const currencies = response.data;

  let total = 0;
  for (const transaction of transactions) {
    if (transaction.currency === "BRL") {
      total += parseFloat(transaction.amount);
    }

    if (transaction.currency === "USD") {
      total += parseFloat(transaction.amount) * currencies.usd;
    }
  }

  res.json({
    total,
  });
});

app.listen(3000);
