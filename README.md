# Hexagonal Architecture and TDD

- This Repository uses a Credit Card domain simulation to put into practice some principles of Hexagonal Architecture implemented using TDD practices;

## Scope

- Simulate this as a "credit card operation system";
- Need get all credit card transactions(from fiscal machines, e-commerce and so on);
- Need aggregate all transactions;
- Need to Convert the transactions into a common currency (because this can be done in Reas, dollars, euro...);
- Need to return an object with an array containing all transactions and their value, and the total amount;

# Intial Structure

- There are two services, one responsible for totaling transactions;
- Another responsible for converting the transitions to a common currency;

# SOLID

## S - Single Responsability Principle
- The first version didn't respect this because the main file has to many responsibilities

## O - Open-Closed Principle
- Due to our small scope, we did not need to extend classes;

## L - Liskov Substitution Principle
- Due to our small scope, this principle wasn't applied by classes

## I - Interface Segregation Principle:
- The classes are not implementing interfaces o methods they don't need

## D - Dependency Injection Principle
- The Currence Invoice class dependencies are abstractions instead of implementations
