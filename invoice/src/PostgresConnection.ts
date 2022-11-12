import pgp from "pg-promise";
import Connection from "./Connection";

export default class PostgresConnection implements Connection {
  connection: any;

  constructor() {
    this.connection = pgp()(
      "postgres://postgres:duppoe@localhost:5432/hexagonalarq"
    );
  }
  query(statement: string, params: any[]): Promise<any> {
    return this.connection.query(statement, params);
  }

  close(): Promise<any> {
    return this.connection.$poll.end();
  }
}
