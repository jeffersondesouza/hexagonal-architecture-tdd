import axios from "axios";
import CurrencyGatway from "./CurrencyGatway";

export default class CurrencyGatwayHttp implements CurrencyGatway {
  async getCurrencies(
    month: number,
    year: number
  ): Promise<{ usd: number; brl: number }> {
    const response = await axios.get(
      `http://localhost:3001/currency/${month}/${year}`
    );
    return response.data;
  }
}