# Hexagonal Architecture and TDD

- This Repository uses a Credit Card doamin simulation to put in pratice some principles of Hexagonal Architecture implemented using TDD pratices;


## Scope
- Simulate this as a "credit card operation system";
- Need get all credit card transactions(from fiscal machines, e-commerce and so on);
- Need aggregate all transactions;
- Need to Convert the transactions into a common currency (because this can be done in Reas, dollars, euro...);
- Need to return an object with an array containing all transactions and their value, and the total amount;


# Intial Structure
- There are two services, one responsible for totaling transactions;
- Another responsable for converting the tranations to a common currency;