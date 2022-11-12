import axios from "axios";
import CalculateInvoice from "../src/CalculateInvoice";
import TransactionDAO from "../src/TransactionDAO";
import CurrencyGatway from "../src/CurrencyGatway";

test("must test API connection", async () => {
  const transactionDao: TransactionDAO = {
    async getTransactions(
      cardNumber: string,
      month: number,
      year: number
    ): Promise<any> {
      return [
        { amount: 1000, currency: "BRL" },
        { amount: 200, currency: "BRL" },
        { amount: 300, currency: "USD" },
      ];
    },
  };

  const currencyGatway: CurrencyGatway = {
    async getCurrencies(): Promise<{ brl: number; usd: number }> {
      return {
        usd: 3,
        brl: 1,
      };
    },
  };

  const calculateInvoice = new CalculateInvoice(transactionDao, currencyGatway);
  const total = await calculateInvoice.execute("1234", 11, 2022);

  expect(total).toEqual(2100);
});
