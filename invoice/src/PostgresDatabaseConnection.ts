import pgp from "pg-promise";
import Connection from "./Connection";

export default class PostgresDatabaseConnection implements Connection {
  connection: any;

  constructor() {
    this.connection = pgp()(
      "postgres://postgres:duppoe@localhost:5432/hexagonalarq"
    );
  }

  async query(statement: string, params: number[]): Promise<any> {
    console.log('query####################')
    return this.connection.query(statement, params);
  }
  close(): Promise<any> {
    return this.connection.$poll.end();
  }
}
