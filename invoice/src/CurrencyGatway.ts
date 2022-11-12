export default interface CurrencyGatway {
  getCurrencies(
    month: number,
    year: number
  ): Promise<{
    usd: number;
    brl: number;
  }>;
}

export type getCurrencies = () => Promise<{
  usd: number;
  brl: number;
}>;

