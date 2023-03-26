import Invoice from "../src/Invoice";

test("Should test Invoice class", () => {
  const transactions = [
    {
      amount: 500,
      currency: "BRL",
    },
    {
      amount: 700,
      currency: "BRL",
    },
    {
      amount: 300,
      currency: "USD",
    },
  ];

  const currencies = {
    usd: 2,
  };

  const invoice = new Invoice(transactions, currencies);

  expect(invoice.getTotal()).toBe(1800);
});
