import express from "express";
import CalculateInvoice from "./CalculateInvoice";
import TransactionDAODatabase from "./TransactionDAODatabase";
import CurrencyGatwayHttp from "./CurrencyGatwayHttp";
import AxiosAdapter from "./AxiosAdapter";

const app = express();

app.get("/cards/:cardNumber/invoices/:month/:year", async function (req, res) {
  TransactionDAODatabase;

  const baseUrl = "http://localhost:3001";
  const httpClient = new AxiosAdapter();
  const transactionDAODatabase = new TransactionDAODatabase();
  const currencyGatwayHttp = new CurrencyGatwayHttp(httpClient);

  const calculateInvoice = new CalculateInvoice(
    transactionDAODatabase,
    currencyGatwayHttp
  );
  const total = await calculateInvoice.execute(
    baseUrl,
    req.params.cardNumber,
    parseInt(req.params.month),
    parseInt(req.params.year)
  );
  res.json({
    total,
  });
});

app.listen(3000);
