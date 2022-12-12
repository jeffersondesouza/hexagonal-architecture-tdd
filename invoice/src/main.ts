import CalculateInvoice from "./CalculateInvoice";
import TransactionDAODatabase from "./TransactionDAODatabase";
import CurrencyGatwayHttp from "./CurrencyGatwayHttp";
import AxiosAdapter from "./AxiosAdapter";
import PostgresConnection from "./PostgresConnection";
import InvoiceController from "./InvoiceController";
import ExpressAdapter from "./ExpressAdapter";

// db connection
const postgresConnection = new PostgresConnection();
const transactionDAODatabase = new TransactionDAODatabase(postgresConnection);

// http connection
const baseUrl = "http://localhost:3001";
const httpClient = new AxiosAdapter();
const currencyGatwayHttp = new CurrencyGatwayHttp(httpClient);

const httpServer = new ExpressAdapter();

new InvoiceController(
  httpServer,
  baseUrl,
  new CalculateInvoice(transactionDAODatabase, currencyGatwayHttp)
);

httpServer.listen(3000);
