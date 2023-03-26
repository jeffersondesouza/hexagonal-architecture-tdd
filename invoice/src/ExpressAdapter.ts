import express from "express";
import HttpServer from "./HttpServer";

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
  }
  register(
    method: string,
    url: string,
    callback: Function
  ): void {
    this.app[method](url, async function (req: any, res: any) {
      const output = await callback(req.params, req.body);
      res.json(output);
    });
  }

  listen(port: number): void {
    return this.app.listen(port);
  }
}
