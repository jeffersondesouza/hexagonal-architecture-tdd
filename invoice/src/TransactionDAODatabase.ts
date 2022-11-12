import pgp from "pg-promise";
import TransactionDAO from "./TransactionDAO";

export default class TransactionDAODatabase implements TransactionDAO {
  async getTransactions(
    cardNumber: string,
    month: number,
    year: number
  ): Promise<any> {
    const connection = pgp()(
      "postgres://postgres:duppoe@localhost:5432/hexagonalarq"
    );
    const transactions = await connection.query(
      "select * from cards.card_transaction where card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3",
      [cardNumber, month, year]
    );

    return transactions;
  }
}
