import axios from "axios";
import CurrencyGatway from "./CurrencyGatway";
import HttpClient from "./HttpClient";

export default class CurrencyGatwayHttp implements CurrencyGatway {
  constructor(readonly httpClinet: HttpClient) {}
  async getCurrencies(
    baseUrl: string,
    month: number,
    year: number
  ): Promise<{ usd: number; brl: number }> {
    const data = this.httpClinet.get(
      `${baseUrl}/currency/${month}/${year}`
    );
    return data;
  }
}

/* 
const response = await axios.get(
  `http://localhost:3001/currency/${month}/${year}`
  );
  
  */
