import axios from "axios";

test("must test API connection", async () => {
  const response = await axios.get(
    "http://localhost:3000/cards/1234/invoices/11/2022"
  );
  const output = response.data;
  
  expect(output.total).toEqual(1050);
});
