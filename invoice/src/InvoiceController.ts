import CalculateInvoice from "./CalculateInvoice";
import HttpServer from "./HttpServer";

export default class InvoiceController {
  constructor(
    httpServer: HttpServer,
    baseUrl: string,
    calculateInvoice: CalculateInvoice
  ) {
    httpServer.register(
      "get",
      "/cards/:cardNumber/invoices/:month/:year",
      async function (params: any, body: any) {
        const total = await calculateInvoice.execute(
          baseUrl,
          params.cardNumber,
          parseInt(params.month),
          parseInt(params.year)
        );
        return { total };
      }
    );
  }
}
