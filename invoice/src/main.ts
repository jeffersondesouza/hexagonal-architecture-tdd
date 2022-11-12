import express from "express";
import CalculateInvoice from "./CalculateInvoice";
import TransactionDAODatabase from "./TransactionDAODatabase";
import CurrencyGatwayHttp from "./CurrencyGatwayHttp";

const app = express();

app.get("/cards/:cardNumber/invoices/:month/:year", async function (req, res) {
  TransactionDAODatabase;
  const calculateInvoice = new CalculateInvoice(
    new TransactionDAODatabase(),
    new CurrencyGatwayHttp()
  );
  const total = await calculateInvoice.execute(
    req.params.cardNumber,
    parseInt(req.params.month),
    parseInt(req.params.year)
  );
  res.json({
    total,
  });
});

app.listen(3000);
