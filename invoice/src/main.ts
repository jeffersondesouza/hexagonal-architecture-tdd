import express from "express";
import CalculateInvoice from "./CalculateInvoice";
import TransactionDAODatabase from "./TransactionDAODatabase";
import CurrencyGatwayHttp from "./CurrencyGatwayHttp";
import AxiosAdapter from "./AxiosAdapter";
import PostgresConnection from "./PostgresConnection";
import InvoiceController from "./InvoiceController";

// db connection
const postgresConnection = new PostgresConnection();
const transactionDAODatabase = new TransactionDAODatabase(postgresConnection);

// http connection
const baseUrl = "http://localhost:3001";
const httpClient = new AxiosAdapter();
const currencyGatwayHttp = new CurrencyGatwayHttp(httpClient);

// user case 
const calculateInvoice = new CalculateInvoice(
  transactionDAODatabase,
  currencyGatwayHttp
);

const app = express();

new InvoiceController(app, baseUrl, calculateInvoice);
