import { Express } from "express";
import CalculateInvoice from "./CalculateInvoice";

export default class InvoiceController {
  constructor(
    app: Express,
    baseUrl: string,
    calculateInvoice: CalculateInvoice
  ) {
    app.get(
      "/cards/:cardNumber/invoices/:month/:year",
      async function (req, res) {
        const total = await calculateInvoice.execute(
          baseUrl,
          req.params.cardNumber,
          parseInt(req.params.month),
          parseInt(req.params.year)
        );
        res.json({
          total,
        });
      }
    );

    app.listen(3000);
  }
}
