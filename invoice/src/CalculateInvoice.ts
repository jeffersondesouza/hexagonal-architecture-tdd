import TransactionDAO from "./TransactionDAO";
import CurrencyGatway from "./CurrencyGatway";
import Invoice from "./Invoice";

export default class CalculateInvoice {
  constructor(
    readonly transactionDao: TransactionDAO,
    readonly currencyGateway: CurrencyGatway
  ) {}

  async execute(cardNumber: string, month: number, year: number) {
    const transactions = await this.transactionDao.getTransactions(
      cardNumber,
      month,
      year
    );
    const currencies = await this.currencyGateway.getCurrencies(month, year);

    const invoice = new Invoice(transactions, currencies);

    return invoice.getTotal();
  }
}
